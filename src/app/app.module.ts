import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { AlertModule } from "ngx-bootstrap/alert";
import { TitleComponent } from "./title.component";
import { SearchComponent } from "./search/search.component";
import { RandomComponent } from "./random/random.component";
import { WikiComponent } from "./wiki/wiki.component";
import { WikiService } from "./wiki.service";
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    RandomComponent,
    WikiComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
  providers: [WikiService]
})
export class AppModule {}
