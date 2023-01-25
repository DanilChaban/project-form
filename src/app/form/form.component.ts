import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ConfirmPasswordValidator} from "./confirm-password.validator";
import {Form} from "../interfaces/form";
import {FormService} from "../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['',
      [Validators.email,
      Validators.required]
    ],
    password: ['',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(11)
    ]],
    confirmPassword: ['',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(11),
      ]]
  },
    {
    validator: ConfirmPasswordValidator('password', 'confirmPassword')
    })

  formArray: Form[] = [];

  constructor(
    private readonly formService: FormService,
    private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formArray = this.formService.getItem();
  }

  onSubmit(): void {
    const formItem = {
      email: this.form.get('email')?.getRawValue(),
      password: this.form.get('password')?.getRawValue()
    }
    this.formArray.push(formItem);
   this.formService.setItem(this.formArray);
  }

}
