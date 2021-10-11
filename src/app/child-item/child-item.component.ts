import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css'],
})
export class ChildItemComponent implements OnInit {
  @Input() items = '';
  value = {
    username: 'owais',
    pass: '1234',
  };

  value1: string = 'hello two';
  subscriber: any = '';
  valueShow: any = '';
  constructor() {}

  ngOnInit(): void {
    const observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(
          `username:${this.value.username} and password:${this.value.pass}`
        );
      }, 1000);
      setTimeout(() => {
        observer.next(this.value1);
      }, 20000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    this.subscriber = observable.subscribe((value) => {
      this.valueShow = value;
    });
  }
}
