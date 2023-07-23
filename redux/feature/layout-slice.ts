import { InitialState } from '@/types/redux/layout'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
  page: 1,
}

export const layout = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPage: (state, actions: PayloadAction<number>) => {
      return {
        page: actions.payload,
      }
    },
  },
})

export const { setPage } = layout.actions
export default layout.reducer
