import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1 class="font-raleway">SAKURA RAMEN</h1>
      <h2 class="font-raleway">Best Ramen in Town</h2>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent { }
