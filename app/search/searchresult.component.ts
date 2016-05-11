import {Component} from '@angular/core'
import {RiotService} from '../common/riot.service'
import {YoutubeService} from '../common/youtube.service'

@Component({
  selector: 'search-result-component',
  template: `
    search result
  `,
  providers: [RiotService, YoutubeService]
})
export class SearchResultComponent{
  constructor(){

  }
}
