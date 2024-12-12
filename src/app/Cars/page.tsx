import AddCar from "../Forms/AddCar"
import Cars from "../Tables/Cars"
import Pagination from "../Pagination/Pagination"

const page = () => {
  return (
    <div>
      <AddCar/>
      <Cars/>
      <Pagination/>
    </div>
  )
}

export default page
