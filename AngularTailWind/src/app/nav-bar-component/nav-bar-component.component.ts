import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.component.html',
  styleUrl: './nav-bar-component.component.css'
})
export class NavBarComponentComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Log Workout', route: '/workout-logger' },
    { label: 'Progress Tracker', route: '/progress-tracker' },
    { label: 'Goal Setting', route: '/goal-setting' },
  ];
}
