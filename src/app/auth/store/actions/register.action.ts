import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '../actionTypes'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { CurrantUserInterface } from '../../../shared/types/currentUser.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrantUserInterface }>()
)
export const registerFailedAction = createAction(ActionTypes.REGISTER_FAILED)
