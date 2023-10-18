import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {CompanyState} from './type'


//call the API for the fetching the data
export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async() =>
{
    const response = await fetch('https://api.github.com/organizations');
    if(!response.ok)
    {
       throw new Error('Network Error');
    }
    const data = await response.json();
    console.log(data)
    return data;
})



const initialState: CompanyState =
{
    companies: [],
    isLoading: false,
    error: null
}


const companySlice = createSlice({
name:'companies',
initialState: initialState,
reducers:{},
extraReducers: (builder) =>
{
    builder
    .addCase(fetchCompanies.pending, (state) => 
    {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchCompanies.fulfilled, (state, action) => 
    {
        state.isLoading = false;
        state.companies = action.payload;
    }) 
     .addCase(fetchCompanies.rejected, (state, action) => 
    {
        state.isLoading = false;
        state.error = action.error.message || 'An Error Occurred';
    })
}

});


export default companySlice.reducer;