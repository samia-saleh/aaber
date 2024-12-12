import SearchTechnical from "../Forms/SearchTechnical"
import SearchTecnicals from "../Tables/SearchTecnicals"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <SearchTechnical/>
      <SearchTecnicals/>
      <Pagination/>
    </div>
  )
}

export default page
