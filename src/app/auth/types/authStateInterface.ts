import { CurrantUserInterface } from '../../shared/types/currentUser.interface'
import { BackendInterface } from '../../shared/types/backend.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currantUser: CurrantUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendInterface | null
}
