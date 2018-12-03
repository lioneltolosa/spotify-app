import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DinnerService {

    constructor(private http: HttpClient) {
        console.log('Service dinner check');
    }

    getNewRelease() {
        const headers = new HttpHeaders ({
            'Authorization': 'Bearer BQD0PyMGPfU5V0Vnri_lW2BgaWRqbUHBOrlqESGpDpWsSUQEtAZLOqakW6nRDJQof-Mb8oWd7bjmDhCLvp4'
        });

        return this.http.get('https://api.spotify.com/v1/browse/featured-playlists' , { headers })
            .pipe( map (data => data['playlists'].items ));
    }
}
