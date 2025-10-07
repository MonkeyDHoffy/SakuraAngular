import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LandingPageComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('sakura17');
}
