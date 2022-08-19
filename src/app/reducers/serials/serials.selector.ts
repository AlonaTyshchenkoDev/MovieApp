import { IMovie } from '../../shared/interfaces';
import { ISerialsState } from './serials.reducer';

export const selectSerialsList = (state: ISerialsState): { page: number, data: IMovie[], amount: number } => ({
  page: state.page,
  data: state.data,
  amount: state.amount
});

export const selectFetchingSerialsState = (state: ISerialsState): boolean => state.isFetching;


