import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";
import {Form} from "../../interfaces/form";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(11)
    ]]
  })

  formArray: Form[] = [];
  constructor(
    private readonly formService: FormService,
    private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formItem = {
      email: this.form.get('email')?.getRawValue(),
      password: this.form.get('password')?.getRawValue()
    }
    this.formArray.push(formItem);
    this.formService.setItem(this.formArray);
  }
  remember(): void {
    this.formArray = this.formService.getItem();
  }

}
