import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './feature/posts-slice'
import layoutReducer from './feature/layout-slice'
import usersReducer from './feature/users-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: { postsReducer, layoutReducer, usersReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
