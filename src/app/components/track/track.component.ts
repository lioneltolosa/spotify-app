import { Component } from '@angular/core';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  newTracks: any[] = [];

  constructor(private trackService: TrackService) {
    this.trackService.getTrack()
      .subscribe((data: any) => {
         console.log(data.categories.items);
        this.newTracks = data.categories.items;
      });
  }

  category(track: any) {
    console.log(track);
  }


}
