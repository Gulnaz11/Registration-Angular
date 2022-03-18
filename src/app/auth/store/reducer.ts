import { Action, createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from '../types/authStateInterface'
import {
  registerAction,
  registerFailedAction,
  registerSuccessAction,
} from './actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currantUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currantUser: action.currentUser,
    })
  ),
  on(
    registerFailedAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
