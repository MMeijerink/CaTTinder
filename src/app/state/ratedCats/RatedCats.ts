import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {fetchCatById} from '../../../api/catAPI'
import {CatData} from '../../../interfaces/CatData.interface'
import {RateType} from '../../../interfaces/RateType'

type RatedCats = {
  "like": Array<string>,
  "dislike": Array<string>
}

type ratedCatparams = {
  id: string,
  rate: RateType,
}

// Define the initial state using that type
const initialState: RatedCats = {like: [], dislike: []}

export const ratedCatsSlice = createSlice({
  name: 'ratedCats',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    rateCat: (state, action: PayloadAction<ratedCatparams>) => {
      const {id, rate} = action.payload;
        if(id && rate){
            state[rate].push(id);
        }
    }
  }
});

export const selectRatedCats = (rate: RateType) => (state: RootState) => state.ratedCats[rate]
export const { rateCat } = ratedCatsSlice.actions;



export default ratedCatsSlice.reducer