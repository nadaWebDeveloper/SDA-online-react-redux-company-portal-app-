import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../TScomponents/type'
import { useEffect } from "react"
import { fetchCompanies } from "../TScomponents/CompanySlice"
import {CompaniesDispatch} from '../TScomponents/type'

const Companies = () => {

const {companies=[], isLoading = false, error= null} = useSelector((state : RootState) => state.companiesR);
const dispatch: CompaniesDispatch = useDispatch()
 
   useEffect(() =>
   {
    dispatch(fetchCompanies())
   },[dispatch])

   console.log(companies)

  return (
<>
   <div>
    <h1>companies</h1>
   </div>
</>
    )}

export default Companies