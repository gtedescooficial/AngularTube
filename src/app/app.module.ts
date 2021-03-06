import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// IMPORTANDO O SERVICO YOUTUBE
import { YoutubeService } from "./services/youtube.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
