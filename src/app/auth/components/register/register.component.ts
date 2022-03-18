import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validator } from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    console.log('init')
    this.form = this.fb.group({
      // @ts-ignore
      username: [''],
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value)
  }
}
