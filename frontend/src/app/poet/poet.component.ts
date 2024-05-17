import {Component, OnInit} from '@angular/core';
import {PoetAPIServiceService} from "../poet-apiservice.service";
import {FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {throwError} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-poet',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf],
  templateUrl: './poet.component.html',
  styleUrl: './poet.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PoetComponent
    }
  ]
})
export class PoetComponent {
  title = 'Poet API responses';
  poems: string[] = [];

  // instantiates form group for getting author and title from user
  bookInputs = new FormGroup({
    author_val: new FormControl(''),
    title_val: new FormControl(''),
  });

  // method that correlates to onSubmit method in poet component html
  OnSubmit(){
    console.warn("Checking form values: ", this.bookInputs.value);
    this.service.getPoetAndTitle(this.bookInputs.value['author_val'], this.bookInputs.value['title_val']).subscribe({
      next: (response: any) => {
        console.log("Response: ", response[0])
        response.forEach((elem: any) => {
          console.log("Element: ", elem)
          this.poems.push(elem.author, elem.title);
        })
      },
      error: (error: any) => {
        console.error("An error occurred during the request", error, error.status)
        return throwError(() => new Error('Unable to complete request. Please try again.'))
      },
    });
  }

  constructor(private service: PoetAPIServiceService) {
  }
}

