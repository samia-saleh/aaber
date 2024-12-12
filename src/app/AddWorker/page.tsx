import AddWorker from "../Forms/AddWorker"
import AddWorkers from "../Tables/AddWorkers"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <AddWorker/>
      <AddWorkers/>
      <Pagination/>
    </div>
  )
}

export default page
