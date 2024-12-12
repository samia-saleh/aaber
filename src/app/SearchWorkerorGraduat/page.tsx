import SearchGraduatOrWorker from "../Forms/SearchGraduatOrWorker"
import GraduatesTables from "../Tables/GraduatesTables"
import Workers from "../Tables/Workers"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <SearchGraduatOrWorker/>
      <GraduatesTables/>
      <Workers/>
      <Pagination/>
    </div>
  )
}

export default page
