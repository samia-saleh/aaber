import TripSearch from "../Forms/TripSearch";
import TripTable from "../Tables/TripTable";
import Pagination from "../Pagination/Pagination";

const page = () => {
  return (
    <div>
    <TripSearch></TripSearch>
    <TripTable></TripTable>
    <Pagination/>
    </div>
  )
}

export default page
