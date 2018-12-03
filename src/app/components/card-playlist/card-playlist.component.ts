import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-playlist',
  templateUrl: './card-playlist.component.html',
  styleUrls: ['./card-playlist.component.css']
})
export class CardPlaylistComponent implements OnInit {

  @Input() inputItemCardPlaylist: any[] = [];

  constructor(private router: Router) { }

  viewCategory(item: any) {
    console.log(item.id);


    // console.log(categoryId);
    this.router.navigate( ['/playlist', item.id] );

  }

  ngOnInit() {
  }

}
