import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Profile } from '../../interfaces/Profile.interface';
import type { RootState } from '../store'

/**
 * The initial state for the ProfileSlice
*/
const initialState: Profile = {name: ""}

/**
 * The ProfileSlice in the redux state
*/
export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    /**
     * The reducer to safe the profile in the state
    */
    saveProfile: (state, action : PayloadAction<Profile>) => {
        return action.payload;
    }
  }
})

/**
 * ProfileSlice actions
*/
export const { saveProfile } = ProfileSlice.actions;

/**
 * Selector for getting the profile data;
*/
export const selectProfile = (state: RootState) => (state.profile)

export default ProfileSlice.reducer