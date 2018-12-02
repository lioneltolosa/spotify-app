import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-playlist',
  templateUrl: './card-playlist.component.html',
  styleUrls: ['./card-playlist.component.css']
})
export class CardPlaylistComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
