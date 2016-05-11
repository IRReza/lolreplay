import {Injectable} from '@angular/core';
import API_KEYS from '../config/api';
import YOUTUBE from '../config/youtube';
import {Observable} from 'rxjs';
import{Http} from '@angular/http';

@Injectable()
export class YoutubeService{

  private baseURL = 'https://www.googleapis.com/youtube/v3/'

  constructor(private http:Http){

  }

  listVideos(): Observable<any>{
    let url = this.baseURL + `search?` +
    `part=snippet&` +
    `maxResults=30&` +
    `order=viewCount&` +
    `channelId=${YOUTUBE.channelId}&` +
    `type=video&` +
    `key=${API_KEYS.google}&`

    return this.http.get(url).map(res => res.json());
  }
}
