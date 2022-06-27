import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel';

  constructor(
    private router: Router
  ) { }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url)
  }
}
