import {Component, OnInit} from '@angular/core';
import {PoetAPIServiceService} from "../poet-apiservice.service";

@Component({
  selector: 'app-poet',
  standalone: true,
  imports: [],
  templateUrl: './poet.component.html',
  styleUrl: './poet.component.css'
})
export class PoetComponent implements OnInit{
  title = 'Poet API responses';
  authors: any;
  titles: any;

  constructor(private service: PoetAPIServiceService) {
  }

  ngOnInit() {
    this.service.getPoetAndTitle('Shakespeare', 'Sonnet').subscribe({
      next: (response: any) => {
        this.authors = response[0].authors
        this.titles = response[0].titles
      },
      error: (error: any) => {
        console.error("An error occurred during the request", error)
      },
    });
  }
}

