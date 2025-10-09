import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from './how-to-order/how-to-order';
import { Footer } from '../shared/components/footer/footer';
import { Imprint } from '../imprint/imprint';
import { Anfahrt } from '../shared/anfahrt/anfahrt';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, LandingPageComponent, OurMenu, HowToOrder, Footer, Imprint, Anfahrt],
  templateUrl: './main-content.html',
  styleUrls: ['./main-content.scss']
})
export class MainContent {

}
