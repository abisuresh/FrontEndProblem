import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {PoetAPIServiceService} from "../poet-apiservice.service";

@Component({
  selector: 'app-poet',
  standalone: true,
  imports: [],
  templateUrl: './poet.component.html',
  styleUrl: './poet.component.css'
})
export class PoetComponent {
  title = 'Poet API responses';
  authors: any;
  titles: any;

  constructor(private service: PoetAPIServiceService) {
  }

  ngOnInit() {
    this.service.getPoet('Ernest Dowson').subscribe({
      // response: (response: any) => {
      //   this.authors = response;
      // },
      error: (error: any) => {
        console.log(error)
      },
    });
      this.service.getTitle('Ozymandias').subscribe({
        // response: (response: any) => {
        //   this.authors = response;
        // },
        error: (error: any) => {
          console.log(error)
        },
    });
  }
}

