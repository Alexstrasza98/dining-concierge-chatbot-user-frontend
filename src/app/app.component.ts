import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    
    constructor(private http: HttpClient) { }

    current_content: String = '';
    isAuth: Boolean = false;

    ngOnInit() {      
        this.current_content = '';
        if (localStorage.getItem("Auth") == "yes") {
            this.isAuth = true;
        }
    }
}

