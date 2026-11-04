import { DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { brandAssets } from './brand-assets';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  readonly year = new Date().getFullYear();
  readonly brand = brandAssets;
  readonly isDark = signal(false);
  readonly activeApproach = signal(0);
  private approachTimer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.scheduleApproachAdvance();
  }

  ngOnDestroy(): void {
    if (this.approachTimer !== undefined) {
      clearTimeout(this.approachTimer);
    }
  }

  selectApproach(index: number): void {
    this.activeApproach.set(index);
    this.scheduleApproachAdvance();
  }

  private scheduleApproachAdvance(): void {
    if (this.approachTimer !== undefined) {
      clearTimeout(this.approachTimer);
      this.approachTimer = undefined;
    }

    if (this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.approachTimer = setTimeout(() => {
      this.activeApproach.update((current) => (current + 1) % 3);
      this.scheduleApproachAdvance();
    }, 8000);
  }

  toggleTheme(): void {
    const nextIsDark = !this.isDark();
    this.isDark.set(nextIsDark);
    this.document.documentElement.setAttribute('data-theme', nextIsDark ? 'dark' : 'light');
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextIsDark ? '#0b1119' : '#f7fafc');
  }
}
