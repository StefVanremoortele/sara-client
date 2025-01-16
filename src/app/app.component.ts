import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { DialogService } from './core/services/dialog.service';
import { StateManagerService } from './core/services/state-manager.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {counterReducer} from './customers/state/reducers/counter.reducer';
import * as CounterActions from './customers/state/actions/customer.actions';
import { CounterState } from './customers/state/counter.state';
import { selectCount } from './customers/state/selectors/counter.selectors'; // Import the selector

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sara-client';
  counter$: Observable<number>;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;

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
    private fromCustomers: Store<CounterState>
  ) {
    this.counter$ = this.fromCustomers.select(selectCount);
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

  openSideDrawer() {
    this._dialog.open();
  }

  increment() {
    this.fromCustomers.dispatch(CounterActions.increment());
  }
}
