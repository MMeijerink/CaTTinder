import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {RateType} from '../../interfaces/RateType'

type RatedCats = {
  "like": Array<string>,
  "dislike": Array<string>
}

type ratedCatparams = {
  id: string,
  rate: RateType,
}

/**
 * The initial state for the RatedCatsSlice
*/
const initialState: RatedCats = {like: [], dislike: []}

/**
 * The RatedCatsSlice in the redux state
*/
export const RatedCatsSlice = createSlice({
  name: 'ratedCats',
  initialState,
  reducers: {
    /**
     * The reducer to rate a cat picture (like / dislike)
    */
    rateCat: (state, action: PayloadAction<ratedCatparams>) => {
      const {id, rate} = action.payload;
        if(id && rate){
            state[rate].push(id);
        }
    }
  }
});

/**
 * RatedCatSlice actions
*/
export const { rateCat } = RatedCatsSlice.actions;

/**
 * Selector for getting the rated cats data;
*/
export const selectRatedCats = (rate: RateType) => (state: RootState) => state.ratedCats[rate]


export default RatedCatsSlice.reducer