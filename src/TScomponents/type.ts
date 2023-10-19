import { ThunkDispatch } from "@reduxjs/toolkit"
import companySlice, {fetchCompanies, fetchCompany}  from  '../TScomponents/CompanySlice'


export type Company =
{
    "login": string,
    "id": number,
    "node_id": string,
    "url": string,
    "repos_url": string,
    "events_url": string,
    "hooks_url": string,
    "issues_url": string,
    "members_url": string,
    "public_members_url": string,
    "avatar_url": string,
    "description": null
}

export type CompanyState =
{
   company: Company[],
   isLoading: boolean,
   error: string | null,
   searchTerm: string | number ,
   singleCompany: Company | null,
}

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;

// // Inferred type: {users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// export type RootState =
// {
//     // companiesR: ReturnType<typeof store.getState>
//     companiesR: ReturnType<typeof CompanySlice>

// }

export type RootState =
{
    // companiesR: ReturnType<typeof store.getState>
    companiesR: ReturnType<typeof companySlice>;

}

 type fetchCompaniesPendingAction = 
 ReturnType<typeof fetchCompanies.pending>; 


 type fetchCompaniesFulfilledAction = 
ReturnType<typeof fetchCompanies.fulfilled>; 


 type fetchCompaniesRejectedAction = 
 ReturnType<typeof fetchCompanies.rejected>; 

 //single page

 type fetchCompanyPendingAction = 
 ReturnType<typeof fetchCompany.pending>; 


 type fetchCompanyFulfilledAction = 
ReturnType<typeof fetchCompany.fulfilled>; 


 type fetchCompanyRejectedAction = 
 ReturnType<typeof fetchCompany.rejected>; 



 type searchCompanyAction =
 {
    type: 'company/searchCompany';
    payload: number | string
 }

 type sortCompanyAction =
 {
    type: 'company/sortCompany';
    payload: string
 }

 export type CompaniesAction =
 | fetchCompaniesPendingAction
 | fetchCompaniesFulfilledAction
 | fetchCompaniesRejectedAction
 | searchCompanyAction
 | sortCompanyAction
 | fetchCompanyPendingAction
 | fetchCompanyFulfilledAction
 | fetchCompanyRejectedAction;

 export type CompaniesDispatch =
 ThunkDispatch<RootState, void, CompaniesAction>;