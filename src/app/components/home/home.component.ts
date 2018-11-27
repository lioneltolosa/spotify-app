import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: Boolean;

  constructor( private spotifyService: SpotifyService ) {

    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;

        // console.log(data.albums.items);
        // this.newSongs = data.albums.items;
    });
  }

  ngOnInit() {
  }

}
