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
            'Authorization': 'Bearer BQBOlY0GufCLda8ZJytsP703wl_fYCjIor5m5NPjUyDmTzwdWwFK_zpD9m8pPDSpjSXulxz4Cpq81OQzxF4'
        });

        return this.http.get('	https://api.spotify.com/v1/browse/categories', {headers});

        // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        //     .subscribe( data => {
        //         console.log(data);
        // });
    }
}
