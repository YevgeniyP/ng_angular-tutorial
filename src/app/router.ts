import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

export const router: Routes = [
  {
    path: "",
    title: "Home",
    component: HomeComponent,
  },
  {
    path: "details/:id",
    title: "Home details",
    component: DetailsComponent,
  },
];
