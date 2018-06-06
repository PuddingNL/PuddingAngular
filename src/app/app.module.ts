import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MenuComponent } from "./menu/menu.component";
import { CvComponent } from "./cv/cv.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PortfolioComponent,
    MenuComponent,
    CvComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
