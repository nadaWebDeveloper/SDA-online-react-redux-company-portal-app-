import { configureStore } from "@reduxjs/toolkit";
import CompanySlice from "./CompanySlice";



export const store = configureStore({
    reducer:
    {
        companiesR: CompanySlice,
    }

})

export default store;