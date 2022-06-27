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

const initialState: RatedCats = {like: [], dislike: []}

export const RatedCatsSlice = createSlice({
  name: 'ratedCats',
  initialState,
  reducers: {
    rateCat: (state, action: PayloadAction<ratedCatparams>) => {
      const {id, rate} = action.payload;
        if(id && rate){
            state[rate].push(id);
        }
    }
  }
});

export const selectRatedCats = (rate: RateType) => (state: RootState) => state.ratedCats[rate]
export const { rateCat } = RatedCatsSlice.actions;

export default RatedCatsSlice.reducer