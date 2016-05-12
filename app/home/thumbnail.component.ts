import {Component, Input} from '@angular/core'

@Component({
  selector: 'thumbnail-component',
  template: `
    {{print()}}
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <img src="{{meta.snippet.thumbnails.high.url}}" class="thumb-img" />
    </div>
  `,
  styles: [`
    .thumb-img{
      width: 100%;
      height: auto;
      -webkit-filter: grayscale(95%);
      filter: grayscale(95%);
    }

    .thumb-img:hover{
      position: relative;
      top: -3px;
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      -webkit-transition: top 2s; /* For Safari 3.1 to 6.0 */
      transition: 0.3s;
    }

  `]
})
export class ThumbnailComponent{
  @Input() meta:Object;

  constructor(){
  }

  print(){
    console.log(this.meta)
  }
}
