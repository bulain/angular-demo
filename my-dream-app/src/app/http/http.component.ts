import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-http',
  template: `
  <form novalidate >
      <button (click)="onGet()">Get</button>
      <button (click)="onPost()">Post</button>
  </form>
  `,
  styles: []
})
export class HttpComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onGet() {
    this.http.get('/api/area/')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }

  onPost() {
    this.http.post('/api/area/', {username: "Bulain", sex: "M"})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }

}
