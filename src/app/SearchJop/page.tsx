import SearchJop from "../Forms/SearchJop"
import AllJops from "../Tables/AllJops"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <SearchJop/>
      <AllJops/>
      <Pagination/>
    </div>
  )
}

export default page
