import BloodSearch from "../Forms/BloodSearch"
import BloodSearchTable from "../Tables/BloodSearchTable"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <BloodSearch/>
      <BloodSearchTable/>
      <Pagination/>
    </div>
  )
}

export default page
