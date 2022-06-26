import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {fetchCat} from '../../../api/catAPI'
import {CatData} from '../../../interfaces/CatData.interface'


// Define the initial state using that type
const initialState: CatData = {}

export const catSlice = createSlice({
  name: 'cat',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCatData.fulfilled, (state, action) => {
      // Add user to the state array
      const data = action.payload;
      if(data && data.length > 0){
      const {id, url, breed_ids, categories} = data[0];
      return {id, url, breed_ids, categories};
      }
      state = {};
    })
  },
})

// export const { decrement } = catSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCat = (state: RootState) => state.cat

export const fetchCatData = createAsyncThunk('cat/fetch', async () => {
  const response = await fetchCat();
  return response.data
})

export default catSlice.reducer