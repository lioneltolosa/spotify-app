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
            'Authorization': 'Bearer BQBsToh6iQX1wBJ5iSNhr1IPaniQeAbSDKsSy1hVLxRsW6yMAVzCpT8XaKifHwhF_1bV_1aHTusZW2sAbK0'
        });

        return this.http.get('	https://api.spotify.com/v1/browse/categories', {headers});

        // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        //     .subscribe( data => {
        //         console.log(data);
        // });
    }
}
