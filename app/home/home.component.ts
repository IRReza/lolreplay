import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../common/youtube.service';
import {RiotService} from '../common/riot.service';
import {Champion} from '../common/champion.interface'
import {ThumbnailComponent} from './thumbnail.component'

@Component({
  selector: 'home-component',
  providers:[YoutubeService, RiotService],
  template: `
    <div class="row">
      <div *ngFor="let item of response.items">
          <thumbnail-component [meta]="item"></thumbnail-component>
      </div>
    </div>
  `,
  directives: [ThumbnailComponent]
})
export class HomeComponent implements OnInit{

  response:Object = {}; //String in json format
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
      res => {this.response = res; console.log(this.response)},
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
