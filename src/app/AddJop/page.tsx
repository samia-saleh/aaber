import AddJop from "../Forms/AddJop"
import Jops from "../Tables/Jops"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <AddJop/>
      <Jops/>
      <Pagination/>
    </div>
  )
}

export default page
