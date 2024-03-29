import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {NavComponent} from './common/nav.component';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search/searchresult.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavComponent],
    template: `
      <nav-component></nav-component>
      <div class="container-fluid">
        <router-outlet></router-outlet>
      </div>
    `
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/search', component: SearchResultComponent}
])
export class AppComponent {
  constructor(private router?:Router){
  }

}
