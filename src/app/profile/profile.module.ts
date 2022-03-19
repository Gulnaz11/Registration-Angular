import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProfileComponent } from './profile.component'

const routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
