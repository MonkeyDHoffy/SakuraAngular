import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from './how-to-order/how-to-order';
import { Anfahrt } from '../shared/anfahrt/anfahrt';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, LandingPageComponent, OurMenu, HowToOrder, Anfahrt],
  templateUrl: './main-content.html',
  styleUrls: ['./main-content.scss']
})
export class MainContent {

}
