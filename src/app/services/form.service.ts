import {Injectable, OnInit} from '@angular/core';
import {Form} from "../interfaces/form";

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit{

  FORM_KEY: 'form-key'
  constructor() { }

  ngOnInit() {
  }

  setItem(value: Form[]): void {
    localStorage.setItem(this.FORM_KEY, JSON.stringify(value));
  }

  getItem(): Form[] {
    return JSON.parse(localStorage.getItem(this.FORM_KEY)!);
  }
}
