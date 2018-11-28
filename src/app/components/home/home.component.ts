import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: Boolean;
  error: Boolean;
  messageError: String;

  constructor( private spotifyService: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;

        // console.log(data.albums.items);
        // this.newSongs = data.albums.items;
    }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        console.log(errorServicio.error.error.message);
        this.messageError = errorServicio.error.error.message;
        // this.error = error.message
    });
  }

  ngOnInit() {
  }

}
