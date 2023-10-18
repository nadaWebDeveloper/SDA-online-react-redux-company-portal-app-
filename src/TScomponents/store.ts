import { configureStore } from "@reduxjs/toolkit";
import companySlice from  '../TScomponents/CompanySlice';






export const store = configureStore({
    reducer:{
        companiesR: companySlice,
    }

})


export default store;