import AddTrip from "../Forms/AddTrip"
import RecordedTrips from "../Tables/RecordedTrips"
import Pagination from "../Pagination/Pagination"
const page = () => {
  return (
    <div>
      <AddTrip/>
      <RecordedTrips/>
      <Pagination/>
    </div>
  )
}

export default page
