import {Injectable} from '@angular/core'
import API_KEYS from '../config/api'
import {Champion} from './champion.interface'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/Rx'

@Injectable()
export class RiotService{

  constructor(private http:Http){
  }

  getBaseUrl(region:string){
    return `https://${region}.api.pvp.net/api/lol/`
  }

  getMatch(matchID:string){
    //TODO
  }

  getChampionList():Observable<any>{
    let url = this.getBaseUrl('global') + 'static-data/na/v1.2/champion?' + `&api_key=${API_KEYS.riot}`

    function extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status)
      }
      let data = res.json().data
      let list:Champion[] = []
      
      Object.keys(data).map(function(key, index) {
        list.push(data[key])
      })
      return list;
    }

    return this.http.get(url).map(extractData)
  }

}
