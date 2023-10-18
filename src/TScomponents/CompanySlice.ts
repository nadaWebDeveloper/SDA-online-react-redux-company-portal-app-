import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {CompanyState} from './type'


//call the API for the fetching the data
export const fetchCompanies = createAsyncThunk('company/fetchCompanies', async() =>
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
    company: [],
    isLoading: false,
    error: null,
    searchTerm: 0,
}


const companySlice = createSlice({
name:'company',
initialState: initialState,
reducers:{
    searchCompany: (state, action) =>{ state.searchTerm = action.payload;},
    sortCompany:(state,action)=>{
        const sortingCriteria = action.payload;
        if(sortingCriteria === 'login')
        {
            state.company.sort((a,b) => a.login.localeCompare(b.login))
        }
        else if (sortingCriteria === 'id')
        {
            state.company.sort((a,b) => a.id - b.id)
        }
    }
},
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
        state.company = action.payload;
    }) 
     .addCase(fetchCompanies.rejected, (state, action) => 
    {
        state.isLoading = false;
        state.error = action.error.message || 'An Error Occurred';
    })
}

});

export const {searchCompany, sortCompany} =  companySlice.actions;
export default companySlice.reducer;