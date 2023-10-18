import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../TScomponents/type'
import { ChangeEvent, useEffect } from "react"
import App from './App.css'
import {fetchCompanies} from '../TScomponents/CompanySlice'
import {CompaniesDispatch} from '../TScomponents/type'
import {searchCompany} from '../TScomponents/CompanySlice'


const Companies = () => {

const {company, isLoading, error, searchTerm} = useSelector(
   (state: RootState) => state.companiesR
   ); 
const dispatch: CompaniesDispatch = useDispatch()
 
   useEffect(() =>
   {
    dispatch(fetchCompanies())
   },[dispatch])

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;

   const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
   {
      dispatch(searchCompany(Number(event.target.value)));
}

   const filteredCompany = searchTerm
   ? company.filter((company) => company.id === searchTerm)
   : company;

  return (
<>
   <div>
    <h1>companies</h1>
    <input type="text" placeholder="Search Company" onChange={handleSearch} value={searchTerm}/>
    <section className="companies">
      {filteredCompany.length > 0 && filteredCompany.map((company) => {
       const {id, login, avatar_url} = company;
       return (
       <article key={id} className="company">
       <img src={avatar_url} alt={login} />
       <h3>{id}</h3>
       <h1>{login}</h1>
       </article>
       )
      }) }
    </section>
   </div>
</>
    )}

export default Companies