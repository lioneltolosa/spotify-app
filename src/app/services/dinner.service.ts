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
            'Authorization': 'Bearer BQCfquYxFOaW5O45XR1QwzOb8Oggjh6AzQWUf4ppEXJb_nxxzm1Q0lO99H3CsG-f4-Xaxr6oh2_ga0aINQY'
        });

        return this.http.get('https://api.spotify.com/v1/browse/categories' , { headers });
    }

    getplaylist(category_id: String) {
        const headers = new HttpHeaders ({
            'Authorization': 'Bearer BQCfquYxFOaW5O45XR1QwzOb8Oggjh6AzQWUf4ppEXJb_nxxzm1Q0lO99H3CsG-f4-Xaxr6oh2_ga0aINQY'
        });

        return this.http.get(`https://api.spotify.com/v1/browse/categories/${ category_id }?country=SE`, { headers });
            // pipe( map (data => data['playlists'].items ));
    }
}
