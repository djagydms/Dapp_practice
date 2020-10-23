import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public name: any;
  public password: any;
  public email: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  httpPostExample() {
    console.log( this.name,  this.password, this.email);

    this.http.post('http://192.168.56.1:4000/user/enroll', 
    {'name':this.name, 'password':this.password, 'email':this.email})
    .subscribe( 
    (val) => { 
        console.log("POST call successful value returned in body", val); 
    }, 
    response => { 
        console.log("POST call in error", response); 
    }, 
    () => { 
        console.log("The POST observable is now completed."); 
    });
  }
}