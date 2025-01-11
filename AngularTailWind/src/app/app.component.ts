import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponentComponent, CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularTailWind';
}
