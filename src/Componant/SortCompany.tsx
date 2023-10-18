import { ChangeEvent } from "react";
import { useDispatch } from "react-redux"
import { sortCompany } from "../TScomponents/CompanySlice";

const SortCompany = () => {
    const dispatch = useDispatch();
    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) =>
    {
        dispatch(sortCompany(event.target.value))
    }

  return (
<>
<label htmlFor="sort"> Sort By</label>
<select name="sort" id="sort" onChange={handleOptionChange}>
    <option value="id" defaultValue="id">ID</option>
    <option value="login">LOGIN</option>
</select>

</>
    )}

export default SortCompany