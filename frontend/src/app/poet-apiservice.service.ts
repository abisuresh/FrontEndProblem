import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PoetAPIServiceService {

  constructor(private http: HttpClient) {
  }

  // commented this out because of a CORS error
  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
  }

  // making get call to poetry api- author and title endpoint
  getPoetAndTitle(poet: string | null | undefined, title: string | null | undefined) {
    let url = "https://poetrydb.org/author,title/" + poet + ";" + title;
    return this.http.get(url, this.httpOptions);
  }
}

