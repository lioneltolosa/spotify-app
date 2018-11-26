import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CallComponent } from './components/call/call.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'call', component: CallComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
