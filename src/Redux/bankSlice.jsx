import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
    name: 'Bank',
    initialState : {
        accounts : [
            {
                id: 1,
                customerName: "Israa Othman",
                accountNumber: "123456",
                accountType: "Savings"
            },
            {
                id: 2,
                customerName: "Ahmad Zahran",
                accountNumber: "987654",
                accountType: "Student accounts"
            }
        ]


    }
    ,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        //     console.log(state.value);
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     console.log(action);
        //     state.value += action.payload
        // },
    },
})
export const selectBank = (state) =>state.bank
console.log(selectBank);
export default bankSlice.reducer