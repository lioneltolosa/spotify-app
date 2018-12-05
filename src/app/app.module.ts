import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CallComponent } from './components/call/call.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TrackComponent } from './components/track/track.component';
import { DinnerComponent } from './components/dinner/dinner.component';
import { CardPlaylistComponent } from './components/card-playlist/card-playlist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

// Routes
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { FeaturedPlaylistsComponent } from './components/featured-playlists/featured-playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    CallComponent,
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent,
    TrackComponent,
    DinnerComponent,
    CardPlaylistComponent,
    PlaylistComponent,
    FeaturedPlaylistsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
