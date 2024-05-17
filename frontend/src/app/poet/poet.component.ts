import {Component, OnInit} from '@angular/core';
import {PoetAPIServiceService} from "../poet-apiservice.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-poet',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './poet.component.html',
  styleUrl: './poet.component.css'
})
export class PoetComponent {
  title = 'Poet API responses';
  authors: any;
  titles: any;

  bookInputs = new FormGroup({
    author_val: new FormControl(''),
    title_val: new FormControl(''),
  });

  onSubmit(){
    console.warn(this.bookInputs.value);
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

  constructor(private service: PoetAPIServiceService) {
  }

  protected readonly onsubmit = onsubmit;
}

