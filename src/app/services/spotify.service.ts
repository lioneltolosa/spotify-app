import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  release: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Spotify Service Check');
   }

    getQuery( query: String) {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders ({
        'Authorization': 'Bearer BQDqOIxQAf7BT288pftg4O0-rpuSsIsglYfS263J2g6XQTbtPEvytBqBUi3Qphfibh1uhXNie0k1tQqdMOc'
      });

      return this.http.get( url, { headers });

    }

    // Simplificado getNewReleases()
    getNewReleases() {
      return this.getQuery('browse/new-releases?limit=20')
                 .pipe( map( data => data['albums'].items)); // Simplificado
    }

    // Simple getNewReleases()

    //  getNewReleases() {
    //     const headers = new HttpHeaders ({
    //       'Authorization': 'Bearer BQDgGsRWx-rf-tURTFqiSHuAahtxXv4GGkj5JxkbpzHqPk5Ld-DXDsT7t0dFm4dps_IospgMj3Nup30bMTo'
    //     });

    //     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', { headers })
    //       .pipe( map( data => data['albums'].items)); // Simplificado

    //       // .pipe( map( data => {
    //       //   return data['albums'].items;
    //       // }));
    //   }

    getArtist(termino: String) {
      return this.getQuery(`search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`)
                 .pipe( map ( data => data['artists'].items));
    }

     // Simple getArtist()

    // getArtist(termino: String) {
    //   const headers = new HttpHeaders ({
    //     'Authorization': 'Bearer BQDgGsRWx-rf-tURTFqiSHuAahtxXv4GGkj5JxkbpzHqPk5Ld-DXDsT7t0dFm4dps_IospgMj3Nup30bMTo'
    //   });

    //   return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`, { headers })
    //     .pipe( map ( data => data['artists'].items));  // Simplificado
    //     // .pipe( map ( data => {
    //     //   return data['artists'].items;
    //     // }));
    // }
}
