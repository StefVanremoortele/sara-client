import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-back-navigation',
  standalone: false,

  templateUrl: './back-navigation.component.html',
  styleUrl: './back-navigation.component.scss'
})
export class BackNavigationComponent {

  constructor(private location: Location, private router: Router) { }

  goBack(): void {
    // broken - needs fix
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/default-route']); // Replace with your desired fallback route
    }
  }
}
