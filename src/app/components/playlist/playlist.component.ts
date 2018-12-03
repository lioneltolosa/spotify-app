import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DinnerService } from '../../services/dinner.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playlistCategory: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private dinnerService: DinnerService) {

    this.activatedRoute.params.subscribe( params => {
      this.getPlaylist( params['id']);
    });
  }

  getPlaylist( category_id: String ) {
    this.dinnerService.getplaylist( category_id )
      .subscribe( (data: any) => {
        console.log(data);
        this.playlistCategory = data;
    });
  }


}
