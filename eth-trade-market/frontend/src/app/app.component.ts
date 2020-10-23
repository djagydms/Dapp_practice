import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public accounts: any;
  public users: any;
  constructor(private http: HttpClient) { }

  title = 'frontend';
  
  ngOnInit() {
    
    this.http.request('GET', 'http://192.168.56.1:4000/wallet/account/all', {responseType:'json'}).subscribe(result => {
      this.accounts = result;
    })
    this.http.request('GET', 'http://192.168.56.1:4000/user/all',  {responseType:'json'}).subscribe(result => {
      this.users = JSON.stringify(result);
    })
  }
}
