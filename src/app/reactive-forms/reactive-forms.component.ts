import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  submitted = false;
  model2: any = {};
  userList: any;
  model = new Hero('', '', '', null);
  Base_URL = 'https://jsonplaceholder.typicode.com';
  post: any;
  constructor(private http: HttpClient) {}
  getapiData() {
    this.post = this.http.get(this.Base_URL + '/posts');
    this.userList = JSON.stringify(this.post);
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.submitted = true;
    this.model2 = JSON.stringify(this.model);
    console.log(this.model2);
  }

  ngOnInit(): void {}
}
