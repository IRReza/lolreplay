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
