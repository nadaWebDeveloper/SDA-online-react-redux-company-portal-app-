import { ChangeEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {fetchCompanies} from '../TScomponents/CompanySlice'
import {Company,RootState,CompaniesDispatch} from '../TScomponents/type'
import {searchCompany} from '../TScomponents/CompanySlice'
import SortCompany from "./SortCompany"
import {Link} from 'react-router-dom'




const Companies = () => {

const {company, isLoading, error, searchTerm} = useSelector((state: RootState) => state.companiesR); 
const dispatch: CompaniesDispatch = useDispatch()
 
   useEffect(() =>
   {
    dispatch(fetchCompanies())
   },[dispatch])

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;
   console.log({company})

   const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
   {
      dispatch(searchCompany(event.target.value));
}
    //search by id and by name
   const filteredCompany = searchTerm
   ? company.filter((company) => {
      if (typeof searchTerm === 'number') {
          return company.id === searchTerm;
      } else {
          return company.login.toLowerCase().includes((searchTerm as string).toLowerCase());
      }
    } )
   : company;                                                                                                                                                      // property 'toLowerCase' does not exist on type 'string | number'. 'toLowerCase' does not exist on type 'number' 

   //search by name
   // const filteredCompany = searchTerm
   // ? company.filter((company) => company.login.toLowerCase().includes(searchTerm.toLowerCase()) )
   // : company;
   // company.id === Number(searchTerm) || company.login.toLowerCase().includes(searchTerm.toLowerCase())

  return (
<>
   <div>
    <h1>companies</h1>
    <div className="">
    <input type="text" placeholder="Search Company" onChange={handleSearch} value={searchTerm}/>
    <SortCompany />
    </div>
    <section className="companies">
      {filteredCompany.length > 0 && filteredCompany.map((company: Company) => {
       const {id, login, avatar_url} = company;
       return (
       <article key={id} className="company">
       <img src={avatar_url} alt={login} />
       <h3>{id}</h3>
       <h1>{login}</h1>
       <Link to={`/Companies/${id}`}>
       <button>Show More</button>
       </Link>
       </article>
       )
      }) }
    </section>
   </div>
</>
    )}

export default Companies