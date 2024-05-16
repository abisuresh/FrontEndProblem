import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpService } from '@angular/common/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {PoetAPIServiceService} from "./poet-apiservice.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poet API responses';
  authors: any;

  constructor(private PoetAPIServiceService: PoetAPIServiceService) {
  }

  ngOnInit() {
    this.PoetAPIServiceService.getPoet('Ernest Dowson').subscribe({
      error: (error: any) => {
        console.log(error)
      },
    })
  }
}
