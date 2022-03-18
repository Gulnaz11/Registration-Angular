import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validator } from '@angular/forms'
import { select, Store } from '@ngrx/store'

import { registerAction } from '../../store/actions/register.action'
import { Observable, Observer } from 'rxjs'
import { isSubmittingSelector } from '../../store/selectors'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup
  // @ts-ignore
  isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    console.log('init')
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }
}
