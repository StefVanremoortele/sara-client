import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  sidenavOpened: Subject<boolean> = new Subject();

  constructor() { 
    this.sidenavOpened.next(false)
  }
  
  toggleSidenav() {
    this.sidenavOpened.next(true)
  }
}
