import { Component, Input } from "@angular/core";

@Component({
  selector: "app-random",
  templateUrl: "./random.component.html",
  styles: []
})
export class RandomComponent {
  @Input() text: string;
}
