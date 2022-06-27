import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {fetchCat} from '../../api/catAPI'
import {CatData} from '../../interfaces/CatData.interface'

const initialState: CatData = {}

export const CatSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatData.fulfilled, (state, action) => {
      const data = action.payload;
      if(data && data.length > 0){
        const {id, url, breeds = [], categories} = data[0];
        const breed_ids = breeds.map(({id: _id})=>(_id));
        return {id, url, breed_ids, categories};
      }
      return {};
    })
  },
})

export const selectCat = (state: RootState) => state.cat

export const fetchCatData = createAsyncThunk('cat/fetch', async ({ preferedBreedId, preferedCategoryId }: { preferedBreedId?: String, preferedCategoryId?: String }) => {
  const response = await fetchCat(preferedBreedId, preferedCategoryId);
  return response.data
})

export default CatSlice.reducer