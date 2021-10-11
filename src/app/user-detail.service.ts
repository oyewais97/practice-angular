import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  Base_URL = 'https://jsonplaceholder.typicode.com/users';
  post: any;
  constructor(private http: HttpClient) {}
  getUserData() {
    this.post = this.http.get(this.Base_URL + '/post');
  }
}
