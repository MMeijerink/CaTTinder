import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import CatReducer from "./cat/CatSlice";
import RatedCatsReducer from "./ratedCats/RatedCats";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['ratedCats'] 
};

const reducers = combineReducers({
    cat: CatReducer,
    ratedCats: RatedCatsReducer,
  })

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch