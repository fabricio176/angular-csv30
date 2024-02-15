import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomSortComponent } from './pages/random-sort/random-sort.component';
import { BtnComponent } from './pages/random-sort/btn/btn.component';
import { SortedPlayersComponent } from './pages/random-sort/sorted-players/sorted-players.component';
import { PlayersAddedComponent } from './pages/random-sort/players-added/players-added.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RandomSortComponent,
    BtnComponent,
    SortedPlayersComponent,
    PlayersAddedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
