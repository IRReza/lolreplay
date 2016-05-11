import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../common/youtube.service';
import {RiotService} from '../common/riot.service';
import {Champion} from '../common/champion.interface'

@Component({
  selector: 'home-component',
  providers:[YoutubeService, RiotService],
  template: `
    <div *ngFor="let video of response.items">
      <p>{{video.snippet.title}}</p>
    </div>
  `
})
export class HomeComponent implements OnInit{

  response:string = ""; //String in json format
  currentPage:number = 1;
  championList: [Champion];

  constructor(private YoutubeService:YoutubeService, private RiotService:RiotService){
  }

  ngOnInit() {
    this.getVideos();
    this.getChampions();
  }

  getVideos(pageToken?:string){
    this.YoutubeService.listVideos(pageToken).subscribe(
      res => {this.response = res},
      error => {console.log(error)}
    )
  }

  getChampions(){
    this.RiotService.getChampionList().subscribe(
      res => {this.championList = res;},
      error => {console.log(error)}
    )
  }

  goToPage(targetPage:number){

  }

}
