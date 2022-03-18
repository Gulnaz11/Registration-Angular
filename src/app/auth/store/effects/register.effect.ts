import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'

import {
  registerAction,
  registerFailedAction,
  registerSuccessAction,
} from '../actions/register.action'
import { CurrantUserInterface } from '../../../shared/types/currentUser.interface'
import { catchError, map, of, switchMap } from 'rxjs'
import { AuthService } from '../../services/auth.service'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    // @ts-ignore
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currantUser: CurrantUserInterface) => {
            // @ts-ignore
            return registerSuccessAction(currantUser)
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailedAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
