import { Component } from '@angular/core';
import { brandAssets } from './brand-assets';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly year = new Date().getFullYear();
  readonly brand = brandAssets;
}
