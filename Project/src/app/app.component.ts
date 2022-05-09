import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--HEADER-->
    <app-header></app-header>
    <!--ROUTE-->
    <app-sidenav></app-sidenav>
    <router-outlet></router-outlet>

    <!--FOOTER-->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Project';
}
