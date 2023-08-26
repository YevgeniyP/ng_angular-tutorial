import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeroesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
