import {createSlice} from "@reduxjs/toolkit";
const initialState = [{
    name: "X",
    income: 5000,
    mobileBill: 1000,
    electricityBill: 2000,
  },
  {
    name: "Y",
    income: 5000,
    mobileBill: 1000,
    electricityBill: 2000,
  },
  {
    name: "Z",
    income: 5000,
    mobileBill: 1000,
    electricityBill: 2000,
  }]

const formData = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        formValues(state,action){
            console.log(`data from reducer: ${action.payload}`)
            state.push(action.payload)
        } 
    },

})
export const {formValues} = formData.actions
export default formData.reducer;