import { ESerialsActionsType, SerialsActions } from './serials.actions';
import { IMovie } from '../../shared/interfaces';

export const serialsFeatureKey = 'serials';

export interface ISerialsState {
  page: number,
  data: IMovie[],
  isError: string,
  isFetching: boolean,
}

export const initialState: ISerialsState = {
  page: 0,
  data: [],
  isError: '',
  isFetching: true,
}

export const serialsReducer = (state = initialState, action: SerialsActions) => {
  switch (action.type) {
    case ESerialsActionsType.loadSerials:
      return {
        ...state,
        isFetching: true
      };
    case ESerialsActionsType.loadSerialsSuccess:
      return {
        ...state,
        page: action.payload.page,
        data: action.payload.data,
        isFetching: false
      };
    case ESerialsActionsType.loadSerialsFailed:
      return {
        ...state,
        isError: action.payload.error,
        isFetching: false
      };
    default:
      return state;
  }
}
