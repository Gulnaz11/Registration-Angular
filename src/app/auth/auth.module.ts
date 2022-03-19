import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { RegisterComponent } from './components/register/register.component'
import { reducer } from './store/reducer'
import { AuthService } from './services/auth.service'
import { RegisterEffect } from './store/effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/moduls/backendErrorMessages.module'
import { PersistanceService } from '../shared/services/persistance.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
