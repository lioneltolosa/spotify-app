import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../../services/dinner.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  newPlaylists: any[] = [];

  constructor(private dinnerService: DinnerService) {
    this.dinnerService.getNewRelease()
      .subscribe((data: any) => {
        console.log(data.categories.items);
        this.newPlaylists = data.categories.items;
    });
  }

  ngOnInit() {
  }

}
