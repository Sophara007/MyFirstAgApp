import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgOptimizedImage,  RouterModule,],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="flex items-end space-x-2">
        <img class="h-10 w-10" [src]="'https://img.icons8.com/?size=40&id=21081&format=png'" alt="logo" aria-hidden="true">
        <h1 class="text-2xl font-bold text-blue-900">Homes</h1>

      </header>
      </a>

      <section class="content">

        <router-outlet></router-outlet>
      </section>

    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
