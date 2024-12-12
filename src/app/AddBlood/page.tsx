import AddBlood from "../Forms/AddBlood"
import Bloods from "../Tables/Bloods"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <AddBlood/>
      <Bloods/>
      <Pagination/>
    </div>
  )
}

export default page
