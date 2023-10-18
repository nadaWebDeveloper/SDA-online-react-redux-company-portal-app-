import { ThunkDispatch } from "@reduxjs/toolkit"
import CompanySlice from "./CompanySlice"
import {fetchCompanies} from './CompanySlice'

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
   companies: Company[],
   isLoading: boolean,
   error: string | null
}


export type RootState =
{
    companiesR: ReturnType<typeof CompanySlice>;
}


 type fetchCompaniesPendingAction = 
 ReturnType<typeof fetchCompanies.pending>; 


 type fetchCompaniesFulfilledAction = 
ReturnType<typeof fetchCompanies.fulfilled>; 


 type fetchCompaniesRejectedAction = 
 ReturnType<typeof fetchCompanies.rejected>; 


 export type CompaniesAction =
 | fetchCompaniesPendingAction
 | fetchCompaniesFulfilledAction
 | fetchCompaniesRejectedAction;

 export type CompaniesDispatch =
 ThunkDispatch<RootState, void, CompaniesAction>;