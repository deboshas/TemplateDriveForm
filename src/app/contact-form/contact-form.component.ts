import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(fname) {

    console.log(fname.errors);
  }

  submit(form) {

    console.log(form.value);
    console.log(form);
  }

}
