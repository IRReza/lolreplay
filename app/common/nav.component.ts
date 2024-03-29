import {Component} from '@angular/core';

let PRIMARY_COLOR = 'rgb(255,102,0)'

@Component({
  selector: 'nav-component',
  template: `
    <div class="top-nav">
      <a class ="top-nav-brand" href="/">LOL<span>REPLAY</span></a>
      <input class="top-nav-search" placeholder="Search..."/>
    </div>
    <div class="top-padder"></div>
  `,
  styles: [`
    .top-nav{
      background-color: black;
      height: 45px;
      display:flex;
      justify-content: space-between;
      align-item: center;
      padding: 0.4em;
      position: fixed;
      top: 0;
      z-index: 999;
      width: 100%;
    }

    .top-padder{
      height:45px; //same as .top-nav height
    }

    .top-nav-brand{
      color:white;
      font-family: ethnocentric;
      font-size: 1.8em;
      padding-left: 1em;
      margin-top: 0em;
    }

    .top-nav-brand:hover{
      color:${PRIMARY_COLOR}
    }

    .top-nav-brand:hover > span{
      color: white;
    }

    .top-nav-brand > span{
      color:${PRIMARY_COLOR};
      font-family: ethnocentric;
    }

    .top-nav-search{
      webkit-border-radius: 40px;
      moz-border-radius: 40px;
      border-radius: 40px;
      border: solid 1px white;
      padding: 0.3em 0.5em;
      background-color: rgba(0, 0, 0, 0);
      color: white;
      height: 30px;
      width: 17em;
      padding-left: 1em;
    }

    .top-nav-search:focus{
      border: solid 1px ${PRIMARY_COLOR};
    }
  `]
})
export class NavComponent{
  constructor(){

  }
}
