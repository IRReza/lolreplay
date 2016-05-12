import {Component} from '@angular/core'
import {RiotService} from '../common/riot.service'
import {YoutubeService} from '../common/youtube.service'
import {Router} from '@angular/router'

@Component({
  selector: 'search-result-component',
  template: `
    search result
  `,
  providers: [RiotService, YoutubeService, Router]
})
export class SearchResultComponent{
  constructor(private router:Router){

  }
}
