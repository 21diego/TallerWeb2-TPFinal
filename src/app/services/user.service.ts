import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user){
    return this.http.post("http://localhost:3000/login", user);
  }
  register(user) {
    return this.http.post("http://localhost:3000/register", user);
  }
}