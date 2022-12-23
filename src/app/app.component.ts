import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    
    constructor(private http: HttpClient) { }

    saveResult : SaveType = {
        businessId: '',
        id : 0,
        image_url: '',
        location: '',
        name: '',
        price : '',
        rate: 0,
        yelp_url: ''
    };

    ngOnInit() {      
        // Simple GET request with response type <any>

        this.http.get<Array<SaveType>>('http://44.206.254.99:8080/save').subscribe(data => {
            this.saveResult = data[0];
        })
    }
}

interface SaveType {
  businessId: String;
  id : number;
  image_url: String;
  location: String;
  name: String;
  price : String;
  rate: number;
  yelp_url: String;
}

