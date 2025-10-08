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
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent { }
