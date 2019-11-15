import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WikiSummary } from "./wiki-summary";

@Injectable()
export class WikiService {

     origin = "&origin=*";
  constructor(private http: HttpClient) {}

  getWiki(title: string) {
    const tempTitle = title.replace(" ", "_") + "?redirect=true";
    const baseUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
    return this.http.get<WikiSummary>(baseUrl + tempTitle);
  }

  getWikiByPageid(pageid: number) {
    const baseUrl =
      "https://www.mediawiki.org/w/api.php?action=query&prop=pageimages|extracts";
    const tempPageid = `&pageids=${pageid}`;
    const format = "&format=json";

    console.log(baseUrl + tempPageid + format + this.origin);
    return this.http.get<any>(baseUrl + tempPageid + format + this.origin) ;
  }

  getSearchResults(value: string) {
    console.log("value: " + value);
    const tempTitle = value.replace(" ", "_");
    const cb = "&callback=JSON_CALLBACK";
    const baseUrl =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts|info&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

    console.log(baseUrl + tempTitle + this.origin);
    return this.http.get<any>(baseUrl + tempTitle + this.origin);
  }
}
