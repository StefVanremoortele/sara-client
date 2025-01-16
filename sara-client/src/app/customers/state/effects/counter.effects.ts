import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as CounterActions from '../actions/customer.actions';

@Injectable()
export class CounterEffects {
    actions;
  constructor(private actions$: Actions) {
    console.log('actions$', this.actions$); // Confirm that actions$ is injected properly
  }

//   Log each increment action
  logIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.increment), // Listen for the increment action
      map(() => {
        console.log('Increment action triggered');
        return { type: '[Counter] No Operation' }; // Return a dummy action
      })
    )
  );

//   // Example: Handle an API call to save the counter value
//   saveCounterToApi$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CounterActions.setCounter), // Listen for the setCounter action
//       switchMap((action) =>
//         // Simulate an API call here
//         of(action.value).pipe(
//           map(() => {
//             console.log(`Counter saved to API: ${action.value}`);
//             return { type: '[Counter] Save Success' }; // Optionally dispatch another action
//           }),
//           catchError((error) => {
//             console.error('Error saving counter:', error);
//             return of({ type: '[Counter] Save Failure' }); // Handle the error
//           })
//         )
//       )
//     )
//   );
}
