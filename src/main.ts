import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { router } from "./app/router";

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(router)],
}).catch((err) => console.error(err));

// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app/app.module";

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
