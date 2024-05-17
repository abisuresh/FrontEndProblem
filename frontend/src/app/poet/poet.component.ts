import {Component, OnInit} from '@angular/core';
import {PoetAPIServiceService} from "../poet-apiservice.service";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-poet',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './poet.component.html',
  styleUrl: './poet.component.css'
})
export class PoetComponent implements OnInit{
  title = 'Poet API responses';
  authors: any;
  titles: any;

  author_val = new FormControl('');
  title_val = new FormControl('');

  constructor(private service: PoetAPIServiceService) {
  }

  ngOnInit() {
    this.service.getPoetAndTitle('Shakespeare', 'Sonnet').subscribe({
      next: (response: any) => {
        console.log(response[0])
        this.authors = response[0].author
        this.titles = response[0].title
      },
      error: (error: any) => {
        console.error("An error occurred during the request", error)
      },
    });
  }
}

