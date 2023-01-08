import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        userData: {
            name: "",
            email: "",
            lastName: ""
        }
    },
    reducers: {
        userData1: (state, { payload }) => {
            state.userData = payload
        }
    },
})


export const { userData1 } = counterSlice.actions

export default counterSlice.reducer