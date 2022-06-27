import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Profile } from '../../interfaces/Profile.interface';
import type { RootState } from '../store'

const initialState: Profile = {name: ""}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action : PayloadAction<Profile>) => {
        return action.payload;
    }
  }
})

export const { saveProfile } = ProfileSlice.actions;

export const selectProfile = (state: RootState) => (state.profile)

export default ProfileSlice.reducer