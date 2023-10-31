import { configureStore } from "@reduxjs/toolkit";
import formData from './Slice'

const store = configureStore({
    reducer: {
        formData: formData
    }
})
export default store;