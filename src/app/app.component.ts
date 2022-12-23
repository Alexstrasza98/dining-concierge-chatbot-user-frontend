import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    
    constructor(private http: HttpClient) { }

    saveResult : String = '123';

    ngOnInit() {      
        // Simple GET request with response type <any>

        this.http.get<Array<SaveType>>('http://44.206.254.99:8080/save').subscribe(data => {
            this.saveResult = data[0].businessId;
        })
    }
}

interface SaveType {
  businessId: String;
  id : number;
  image_url: String;
  location: String;
  name: String;
  Price : String;
  rate: number;
  yelp_url: String;
}

