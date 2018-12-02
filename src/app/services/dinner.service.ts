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
            'Authorization': 'Bearer BQBqrYgVRvZbtv0iAez3UmydsaT7IxQqxipG3V25bqOZkK1_5pEDb3fVuqA5sjujaLAsBm0H2VbD__pm61E'
        });

        return this.http.get('https://api.spotify.com/v1/browse/featured-playlists' , { headers })
            .pipe( map (data => data['playlists'].items ));
    }
}
