import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(data: any): any{
    return this.http.post('http://localhost:8090/api/register' , data);
  }

  loginUser(data: any): any{
    return this.http.post('http://localhost:8090/api/login' , data);
  }

}
