import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DinnerService } from '../../services/dinner.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playCategory: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private dinnerService: DinnerService) {

    this.activatedRoute.params.subscribe( params => {
      this.getCategory( params['id']);
    });
  }

  getCategory( category_id: String ) {
    this.dinnerService.getCategory( category_id )
      .subscribe(data => {
        console.log(data);
        this.playCategory = data;
      });
  }


}
