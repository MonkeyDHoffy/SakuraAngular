import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from './shared/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('sakura17');
}
