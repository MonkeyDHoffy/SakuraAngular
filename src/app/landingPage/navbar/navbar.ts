import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-navbar',
//   imports: [],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.scss'
// })
// export class Navbar {

// }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/menu">Menu</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent { }
