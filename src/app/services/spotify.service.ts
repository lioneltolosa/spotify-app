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
        'Authorization': 'Bearer BQDRoWV3-y25fFmOvKN5NvFL2SeyJzBWlVIVTHsJzVqcaSj_VATeNmgH7wVcsm14lyVm73oGP9WzSZZLLBo'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', { headers });
    }
}
