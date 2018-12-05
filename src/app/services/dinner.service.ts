import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DinnerService {

    constructor(private http: HttpClient) {
        console.log('Service dinner check');
    }

    getNewRelease() {
        const headers = new HttpHeaders ({
            'Authorization': 'Bearer BQDZKOcyeQbLmyiYi52FIYZwfdy4x_PTxZtcj7GxuvI_nE3xhAOX29mLAEjSpPTbicr9QsS88jU_7ZpCurU'
        });

        return this.http.get('https://api.spotify.com/v1/browse/categories' , { headers });
    }

    getCategory(category_id: String) {
        const headers = new HttpHeaders ({
            'Authorization': 'Bearer BQDZKOcyeQbLmyiYi52FIYZwfdy4x_PTxZtcj7GxuvI_nE3xhAOX29mLAEjSpPTbicr9QsS88jU_7ZpCurU'
        });

        return this.http.get(`https://api.spotify.com/v1/browse/categories/${ category_id }/playlists`, { headers });
            // .pipe( map (data => data['name']));
    }
}
