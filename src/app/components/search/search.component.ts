import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loading: Boolean;

  constructor(private spotifyService: SpotifyService) {}

  search(termino: String) {
    console.log(termino);

    this.loading = true;
    this.spotifyService.getArtist( termino )
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;

        // console.log(data.artists.items);
        // this.artists = data.artists.items;
      });
  }

}
