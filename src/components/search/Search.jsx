import React,{useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({onSearchChange}) => {
  const [search,setSearch] = useState(null)

  const loadOptions = (inpuValue) =>{
  return fetch('/cities',options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err=> console.log(err))
  }
  const handleOnChange = (searchData)=>{
    setSearch(searchData)
    onSearchChange(searchData);
  }
  

 
  return (
    <AsyncPaginate 
    placeholder="Search for city"
    debounceTimeout={600} 
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}

    />
  )
}

export default Search
