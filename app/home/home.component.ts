import {Component} from '@angular/core';
import {YoutubeService} from '../common/youtube.service';

@Component({
  selector: 'home-component',
  providers:[YoutubeService],
  template: `home`
})
export class HomeComponent{

  response:string; //String in json format

  constructor(private YoutubeService:YoutubeService){

  }

  onGetVideos(){
    this.YoutubeService.listVideos().subscribe(
      res => {console.log(res)},
      error => {console.log(error)}
    )
  }
}
