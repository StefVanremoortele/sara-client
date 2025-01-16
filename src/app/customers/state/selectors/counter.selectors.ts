import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../counter.state';

// Select the entire feature slice
// export const selectCounterFeature = createFeatureSelector<number>('counter');

// Optionally, create specific selectors (not necessary for this simple state)
// export const selectCounterValue = createSelector(
//   selectCounterFeature,
//   (state) => state
// );




export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);