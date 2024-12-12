import AddGraduate from "../Forms/AddGraduate"
import Graduates from "../Tables/Graduates"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <AddGraduate/>
      <Graduates/>
      <Pagination/>
    </div>
  )
}

export default page
