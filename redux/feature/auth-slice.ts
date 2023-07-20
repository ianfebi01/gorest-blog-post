import { InitialState } from '@/types/redux/auth'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
  value: {
    isAuth     : false,
    username   : '',
    uid        : '',
    isModerator: false,
  },
}

export const auth = createSlice({
  name    : 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, actions: PayloadAction<string>) => {
      return {
        value: {
          isAuth     : true,
          username   : actions.payload,
          uid        : 'asldknaslsaS21E20',
          isModerator: false,
        },
      }
    },
  },
})


export const {logIn,logOut} = auth.actions
export default auth.reducer