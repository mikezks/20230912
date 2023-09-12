import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoreModule
  ],
  template: `
    <div class="wrapper">
      <div class="sidebar" data-color="white" data-active-color="danger">
        <app-sidebar-cmp />
      </div>

      <div class="main-panel">
        <app-navbar-cmp />

        <div class="content">

          <router-outlet />

        </div>

        <footer></footer>
      </div>
    </div>
  `
})
export class AppComponent {
}
