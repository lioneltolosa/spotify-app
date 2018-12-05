import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DinnerService } from '../../services/dinner.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playCategory: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private dinnerService: DinnerService,
              private router: Router) {

    this.activatedRoute.params.subscribe( params => {
      this.getCategory( params['id']);
    });
  }

  getCategory( category_id: String ) {
    this.dinnerService.getCategory( category_id )
      .subscribe(data => {
        console.log(data['playlists'].items);
        this.playCategory = data['playlists'].items;
      });
  }
}
