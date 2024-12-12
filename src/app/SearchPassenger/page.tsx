import PassengerSearch from "../Forms/PassengerSearch"
import PassengersTable from "../Tables/PassengersTable"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <PassengerSearch/>
      <PassengersTable/>
      <Pagination/>
    </div>
  )
}

export default page
