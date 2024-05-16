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
  getPoet(poet: any) {
    let url = "https://poetrydb.org/author";
    return this.http.get(url, this.httpOptions);
  }
}

