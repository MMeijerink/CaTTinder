import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CatReducer from "./cat/CatSlice";
import RatedCatsReducer from "./ratedCats/RatedCatsSlice";
import ProfileReducer from "./profile/ProfileSlice";

/**
 * Redux persist configuration
*/
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ratedCats', 'profile'] 
};

/**
 * Combine the reducers
*/
const reducers = combineReducers({
    cat: CatReducer,
    ratedCats: RatedCatsReducer,
    profile: ProfileReducer,
  })

/**
 * Combine reducers and configure redux persist
*/
const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Configure the redux store
*/
export const store = configureStore({
    reducer: persistedReducer,
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch