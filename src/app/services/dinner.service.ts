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
            'Authorization': 'Bearer BQBOlY0GufCLda8ZJytsP703wl_fYCjIor5m5NPjUyDmTzwdWwFK_zpD9m8pPDSpjSXulxz4Cpq81OQzxF4'
        });

        return this.http.get('https://api.spotify.com/v1/browse/categories' , { headers });
    }

    getCategory(category_id: String) {
        const headers = new HttpHeaders ({
            'Authorization': 'Bearer BQBOlY0GufCLda8ZJytsP703wl_fYCjIor5m5NPjUyDmTzwdWwFK_zpD9m8pPDSpjSXulxz4Cpq81OQzxF4'
        });

        return this.http.get(`https://api.spotify.com/v1/browse/categories/${ category_id }?country=SE`, { headers })
            .pipe( map (data => data['name']));
    }
}
