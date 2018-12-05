import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

    constructor(private http: HttpClient) {
        console.log('Track service Check');
    }

    getTrack() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDZKOcyeQbLmyiYi52FIYZwfdy4x_PTxZtcj7GxuvI_nE3xhAOX29mLAEjSpPTbicr9QsS88jU_7ZpCurU'
        });

        return this.http.get('	https://api.spotify.com/v1/browse/categories', {headers});

        // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        //     .subscribe( data => {
        //         console.log(data);
        // });
    }
}
