import SearchGraduate from "../Forms/SearchGraduate"
import GraduatesTables from "../Tables/GraduatesTables"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <SearchGraduate/>
      <GraduatesTables/>
      <Pagination/>
    </div>
  )
}

export default page
