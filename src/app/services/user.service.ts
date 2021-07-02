import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
//import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user){
    return this.http.post("/api/login", user);
  }
  register(user): Observable<any> {
    return this.http.post("/api/register", user);
  }
}