import { Component, OnInit } from '@angular/core'
import { PersistanceService } from '../shared/services/persistance.service'
import { CurrantUserInterface } from '../shared/types/currentUser.interface'

@Component({
  selector: 'mc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  // @ts-ignore
  profileName: string = JSON.parse(localStorage.getItem('accesToken')).split(
    ' '
  )[0]
  // @ts-ignore
  profileEmail: string = JSON.parse(localStorage.getItem('accesToken')).split(
    ' '
  )[1]
}
