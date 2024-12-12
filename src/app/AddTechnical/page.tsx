import Addtechnical from "../Forms/Addtechnical"
import Technicals from "../Tables/Technicals"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <Addtechnical/>
      <Technicals/>
      <Pagination/>
    </div>
  )
}

export default page
