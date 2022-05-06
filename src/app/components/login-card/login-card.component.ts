import { AuthenticationService } from './../../services/authentication.service';
import { PostLogsService } from '../../services/post-logs.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  public user: string = '';
  public password: string = '';

  constructor(private service: AuthenticationService) { }

  ngOnInit(): void {
  }



  login(){
    var User = this.user;
    var password = this.password;
    console.log(User);
    console.log(password);
    var token = this.service.userLogin(User, password);
    console.log(token);
  }



}
