import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PoetAPIServiceService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getPoet(poet: String) {
    let url = "https://poetrydb.org/author/" + poet;
    return this.http.get(url, this.httpOptions);
  }

  getTitle(title: String){
    let url = "https://poetrydb.org/title/" + title;
    return this.http.get(url, this.httpOptions);
  }
}

