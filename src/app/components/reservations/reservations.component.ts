import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Reservation {
  businessId: String;
  id : number;
  image_url: String;
  location: String;
  name: String;
  yelp_url: String;
  people: number;
  dt: Date;
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ReservationList : Array<Reservation> = [{
    businessId: '',
    id : 0,
    image_url: '',
    location: '',
    name: '',
    yelp_url: '',
    people: 0,
    dt: new Date("1998-10-19")
  }];

  ngOnInit(): void {
    this.http.get<Array<Reservation>>('http://44.206.254.99:8080/reserve').subscribe(data => {
      this.ReservationList = data;
    })
  }

}
