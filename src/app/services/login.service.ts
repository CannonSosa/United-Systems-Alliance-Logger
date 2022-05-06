import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = { headers: new Headers({ 'Content-Type': 'application/json' })};
  token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZWxsbzEiLCJqdGkiOiI0NGQ2NGQzMy1iM2ZmLTRiMDYtODgyMS1kYjUyNzVmZjJkZjYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGVsbG8xIiwibmJmIjoxNjUxNTQxNDI3LCJleHAiOjE2NTE4MDA2MjcsImF1ZCI6IlJlbW90ZUxvZ2dlclVzZXJzIn0.nfGJdEn7dMD39cze_58gB5-4k2JA229aVDEo98R12R7nQF-bbFZHO7fVpYojX6ZBnws_R_yJDYN8MByLsfTsVg';
  token2 = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZWxsbzEiLCJqdGkiOiI0NGQ2NGQzMy1iM2ZmLTRiMDYtODgyMS1kYjUyNzVmZjJkZjYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGVsbG8xIiwibmJmIjoxNjUxNTQxNDI3LCJleHAiOjE2NTE4MDA2MjcsImF1ZCI6IlJlbW90ZUxvZ2dlclVzZXJzIn0.nfGJdEn7dMD39cze_58gB5-4k2JA229aVDEo98R12R7nQF-bbFZHO7fVpYojX6ZBnws_R_yJDYN8MByLsfTsVg';


  constructor(private http: HttpClient) { }

  setJwtToken(){}

  /** Get Token  */
  getJwtToken(){
    var jsonToken = JSON.parse(atob(this.token.split('.')[1]));
    return this.token2;
  }

  userLogin(user: string, password: string){
    const headers = { 'content-type': 'application/json'}
    var body = JSON.stringify({ UserName: user, Password: password });
    console.log(body);
    return this.http.post("https://localhost:5001/api/User/login", body, {'headers': headers}).subscribe((response) =>
    { console.log(response);
    });
  }



}
