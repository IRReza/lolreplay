import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../common/youtube.service';

@Component({
  selector: 'home-component',
  providers:[YoutubeService],
  template: `
    <div *ngFor="let video of response.items">
      <p>{{video.snippet.title}}</p>
    </div>
  `
})
export class HomeComponent implements OnInit{

  response:string = ""; //String in json format
  currentPage:number = 1;

  constructor(private YoutubeService:YoutubeService){
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(pageToken?:string){
    this.YoutubeService.listVideos(pageToken).subscribe(
      res => {this.response = res},
      error => {console.log(error)}
    )
  }

  goToPage(targetPage:number){

  }

}
