import {Injectable} from '@angular/core';
import API_KEYS from '../config/api';
import YOUTUBE from '../config/youtube';
import {Observable} from 'rxjs';
import{Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService{

  private baseURL = 'https://www.googleapis.com/youtube/v3/'

  constructor(private http:Http){

  }

  listVideos(pageToken?:string): Observable<any>{
    let url = this.baseURL + `search?` +
    `part=snippet&` +
    `maxResults=32&` +
    `order=date&` +
    `channelId=${YOUTUBE.channelId}&` +
    `type=video&` +
    `key=${API_KEYS.google}&`

    if (pageToken) url += `pageToken=${pageToken}&`
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }
}
