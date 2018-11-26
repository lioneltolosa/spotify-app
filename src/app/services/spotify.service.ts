import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  release: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Spotify Service Check');
   }

   getNewReleases() {
      const headers = new HttpHeaders ({
        'Authorization': 'Bearer BQBWAInaPrvR1Q7glTL62c1-xhd_1QYLXNVjQZ5Z0Iuc1dfgXQmqiW7EDZRJiNqAM3-ufvxFJNFrtvbBo3Q'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', { headers });
    }

    getArtist(termino: String) {
      const headers = new HttpHeaders ({
        'Authorization': 'Bearer BQBWAInaPrvR1Q7glTL62c1-xhd_1QYLXNVjQZ5Z0Iuc1dfgXQmqiW7EDZRJiNqAM3-ufvxFJNFrtvbBo3Q'
      });

      return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=ES&offset=0&limit=15`, { headers });
    }
}
