import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCounter = (state: AppState) => state.counter;
