import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContent } from './main-content/main-content';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MainContent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('sakura17');
}
