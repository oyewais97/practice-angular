import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    console.log('this is', form);
    console.log(form.value.coursename);
    console.log(form.value.coursedescription);
  }
}
