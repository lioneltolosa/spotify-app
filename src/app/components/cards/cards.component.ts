import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() songs: any[] = [];

  constructor(private router: Router) { }

  verArtist(song: any) {
    console.log(song);

    let artistId;

    if ( song.type === 'artist' ) {
      artistId = song.id;
    } else {
      artistId = song.artists[0].id;
    }
    // console.log(artistId);
    this.router.navigate( ['/artist', artistId] );
  }
}
