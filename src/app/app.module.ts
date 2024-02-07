import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomSortComponent } from './pages/random-sort/random-sort.component';
import { BtnComponent } from './pages/random-sort/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RandomSortComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
