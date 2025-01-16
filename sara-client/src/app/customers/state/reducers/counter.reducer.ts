import { createReducer, on } from '@ngrx/store';

import * as CounterActions from '../actions/customer.actions';
import { initialState } from '../counter.state';

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.reset, (state) => ({ ...state, count: 0 })),
  on(CounterActions.setCounter, (state, { value }) => ({
    ...state,
    count: value,
  }))
);
