import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public accounts: any;
  public users: any;
  public postId: any;
  

  // constructor(){}
  // ngOnInit(){}
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.request('GET', 'http://192.168.56.1:4000/wallet/account/all', {responseType:'json'}).subscribe(result => {
      this.accounts = result;
    })
    this.http.request('GET', 'http://192.168.56.1:4000/user/all',  {responseType:'json'}).subscribe(result => {
      var json = JSON.stringify(result);
      var str = "";
      for(var i in result){
        str += "회원 이름: "+result[i]['username']+"  계좌주소: "+result[i]['wallet_address']+"   \n";
      }
      console.log(json);
      this.users = str;
      
    })
  }
}
