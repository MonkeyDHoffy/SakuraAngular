import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar";
import { HowToOrder } from '../how-to-order/how-to-order';
import { OurMenu } from '../our-menu/our-menu';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HowToOrder, OurMenu],
  template: `
    <section>
      <div><app-navbar></app-navbar></div>
      <h1 class="font-raleway">SAKURA RAMEN</h1>
      <h2 class="font-raleway">Best Ramen in Town</h2>
    </section>
    <app-how-to-order></app-how-to-order>
    <app-our-menu></app-our-menu>
  `,
  styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent { }


