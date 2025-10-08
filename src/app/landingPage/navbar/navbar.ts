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
      <img src="/assets/img/1_hero/PNG/sakura_logo.png" alt="Sakura Ramen Logo" class="navbar-logo">
      <div class="navbar-links">
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">About</a>
        <div class="phone_btn">
          <img src="/assets/img/1_hero/PNG/phone.png" alt="Phone Icon">
          <a href="tel:+1234567890">01234567890</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent { }
