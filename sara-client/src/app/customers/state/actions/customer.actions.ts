import { createAction, props } from '@ngrx/store';

// Action to increment the counter
export const increment = createAction('[Counter] Increment');

// Action to decrement the counter
export const decrement = createAction('[Counter] Decrement');

// Action to reset the counter to zero
export const reset = createAction('[Counter] Reset');

// Action to set the counter to a specific value
export const setCounter = createAction(
  '[Counter] Set Counter',
  props<{ value: number }>() // Define the payload for the action
);
