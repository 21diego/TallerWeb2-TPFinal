import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user): Observable<User>{
    return this.http.post<User>("/api/login", user);
  }
  register(user): Observable<User>{
    return this.http.post<User>("/api/register", user);
  }
  logout(): Observable<User>{
    return this.http.get<User>("/api/logout");
  }
}


interface User {
  user: string,
  state: boolean
}
