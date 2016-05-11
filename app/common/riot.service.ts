import {Injectable} from '@angular/core';
import API_KEYS from '../config/api';

@Injectable()
export class RiotService{

  constructor(){
  }

  getBaseUrl(region:string){
    return `https://${region}.api.pvp.net/api/lol/`
  }

  getMatch(matchID:string){
    //TODO
  }

  getChamionData(){
    //TODO
  }
}
