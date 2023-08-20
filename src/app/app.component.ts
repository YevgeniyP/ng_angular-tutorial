import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        --content-padding: 10px;
      }
      header {
        display: block;
        height: 60px;
        padding: var(--content-padding);
        box-shadow: 0px 5px 25px var(--shadow-color);
      }
      .content {
        padding: var(--content-padding);
      }
    `,
  ],
})
export class AppComponent {
  title = "homes";
}
