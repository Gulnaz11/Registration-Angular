import { Injectable, Output } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'

import {
  registerAction,
  registerFailedAction,
  registerSuccessAction,
} from '../actions/register.action'
import { CurrantUserInterface } from '../../../shared/types/currentUser.interface'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { PersistanceService } from '../../../shared/services/persistance.service'
import { Router } from '@angular/router'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currantUser: CurrantUserInterface) => {
            // window.localStorage.setItem('accesToken', currantUser.token)
            this.persistanceService.set(
              'accesToken',
              [currantUser.username, currantUser.email].join(' ')
            )
            console.log(currantUser)
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

  redirectAfterSubmit = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.roter.navigateByUrl('/profile')
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private roter: Router
  ) {}
}
