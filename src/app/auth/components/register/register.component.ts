import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'

import { registerAction } from '../../store/actions/register.action'
import { Observable, Observer } from 'rxjs'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { BackendInterface } from '../../../shared/types/backend.interface'

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
  // @ts-ignore
  backendErrors$: Observable<BackendInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    // @ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    console.log('init')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('submit error', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
  }
}
