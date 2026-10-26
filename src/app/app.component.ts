import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { brandAssets } from './brand-assets';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  readonly year = new Date().getFullYear();
  readonly brand = brandAssets;
  readonly isDark = signal(false);

  toggleTheme(): void {
    const nextIsDark = !this.isDark();
    this.isDark.set(nextIsDark);
    this.document.documentElement.setAttribute('data-theme', nextIsDark ? 'dark' : 'light');
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextIsDark ? '#0b1119' : '#f7fafc');
  }
}
