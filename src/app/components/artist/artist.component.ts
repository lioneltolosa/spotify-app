import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: Boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService  ) {

    this.loading = true;

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);

      this.getArtist( params ['id']);
    });
  }

  getArtist( id: String ) {
    this.spotifyService.getArtist( id )
      .subscribe( data => {
        console.log(data);
        this.artist = data;

        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
