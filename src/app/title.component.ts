import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{text}}</h1>`,
  styles: []
})
export class TitleComponent  {
  @Input() text: string;
}
