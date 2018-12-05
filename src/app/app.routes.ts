import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CallComponent } from './components/call/call.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { DinnerComponent } from './components/dinner/dinner.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'call', component: CallComponent},
    {path: 'track', component: TrackComponent},
    {path: 'dinner', component: DinnerComponent},
    {path: 'playlist/:id', component: PlaylistComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
