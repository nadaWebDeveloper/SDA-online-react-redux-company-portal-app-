import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'

import { useParams} from "react-router-dom"
import { fetchCompany } from "../TScomponents/CompanySlice";
import {RootState, CompaniesDispatch} from '../TScomponents/type'





const SingleCompany = () => {
    const {id} = useParams();
    const dispatch: CompaniesDispatch = useDispatch()
    const {isLoading, error, singleCompany} = useSelector((state: RootState) => state.companiesR); 

    useEffect(()=>{
        if(id) dispatch(fetchCompany(Number(id)))
      },[dispatch, id])

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;
   console.log({singleCompany})

  return (
<>
{singleCompany && (
    <article>
        <img src={singleCompany.avatar_url} alt={singleCompany.login} />
        <h1>{singleCompany.login}</h1>
        <p>{singleCompany.issues_url}</p>
        <p>{singleCompany.repos_url}</p>
    </article>
)}

</>  
)}

export default SingleCompany