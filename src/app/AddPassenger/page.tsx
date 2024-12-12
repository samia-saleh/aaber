import AddPassenger from "../Forms/AddPassenger";
import AddPassengers from "../Tables/AddPassengers";
import Pagination from "../Pagination/Pagination";

const page = () => {
  return (
    <div>
       <AddPassenger/>
       <AddPassengers/>
       <Pagination/>
    </div>
  )
}

export default page
