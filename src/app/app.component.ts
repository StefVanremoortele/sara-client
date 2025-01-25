import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '@syndicus/core/models/user';
import { DialogService } from '@syndicus/core/services/dialog.service';
import { StateManagerService } from '@syndicus/core/services/state-manager.service';
import { ApiService } from '@syndicus/core/services/api.service';
import { MockService } from '@syndicus/shared/mock.service';
import { CounterState } from '@syndicus//customers/state/counter.state';
import { selectCount } from '@syndicus/customers/state/selectors/counter.selectors';
import * as CounterActions from '@syndicus/customers/state/actions/customer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sara-client';
  counter$: Observable<number>;
  user: User;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  isLoggedIn = true;

  links = [
    {
      router: '/buildings',
      icon: 'house',
      text: 'gebouwen',
    },
    {
      router: '/customers',
      icon: 'house',
      text: 'klanten',
    },
    {
      router: '/suppliers',
      icon: 'house',
      text: 'leveranciers',
    },
  ];

  constructor(
    private observer: BreakpointObserver,
    private _dialog: DialogService,
    private _state: StateManagerService,
    private _api: ApiService,
    private _mock: MockService,
    private fromCustomers: Store<CounterState>
  ) {
    this.counter$ = this.fromCustomers.select(selectCount);
    // this._dialog.open(BaseDialogComponent, { hasCloseButton: true });
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    this._state.sidenavOpened.subscribe((sidenavOpen) => {
      if (sidenavOpen) {
      }
    });

    // this._api.get("BUILDING_DETAIL", "1").subscribe((res) => {
    this._api.get("BUILDING_DETAIL", "1").subscribe((res) => {
      console.log(res)
    })
  }

  toggleMenu() {
    // if (this.isMobile) {
    //   this.sidenav.toggle();
    //   this.isCollapsed = false; // On mobile, the menu can never be collapsed
    // } else {
    //   this.sidenav.open();
    //   this.isCollapsed = !this.isCollapsed;
    // }
    this._state.toggleSidenav();
  }

  increment() {
    this.fromCustomers.dispatch(CounterActions.increment());
  }

  loginSubmit() {
    this.user = this._mock.getAnonymousUser();
    this.isLoggedIn = this.user?.isAuthenticated;
  }
}
