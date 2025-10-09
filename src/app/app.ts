import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContent } from './main-content/main-content';
import { Footer } from './shared/components/footer/footer';
import { Imprint } from './imprint/imprint';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MainContent, Footer, Imprint],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('sakura17');
}
