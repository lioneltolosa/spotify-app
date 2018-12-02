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
            'Authorization': 'Bearer BQDzP37-LqSytjcjyL7qdrG5gOuSPdz7zr_jLqLBriSAU2lw9b4QV98gPTEoNiLIbDJ0XG2aBBDoUlnrc1s'
        });

        return this.http.get('	https://api.spotify.com/v1/browse/categories', {headers});

        // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        //     .subscribe( data => {
        //         console.log(data);
        // });
    }
}
