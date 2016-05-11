import {Injectable} from '@angular/core'
import API_KEYS from '../config/api'
import {Champion} from './champion.interface'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class RiotService{

  private static championList:Champion[] = [];

  constructor(private http:Http){
  }

  getBaseUrl(region:string){
    return `https://${region}.api.pvp.net/api/lol/`
  }

  getMatch(matchID:string){
    //TODO
  }

  getChampionList():Observable<any>{
    //Caching
    if (RiotService.championList.length > 0)
      return Observable.of(RiotService.championList)

    let url = this.getBaseUrl('global') + 'static-data/na/v1.2/champion?' + `&api_key=${API_KEYS.riot}`

    function extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status)
      }
      let data = res.json().data

      Object.keys(data).map(function(key, index) {
        RiotService.championList.push(data[key])
      })
      return RiotService.championList;
    }

    return this.http.get(url).map(extractData)
  }

}
