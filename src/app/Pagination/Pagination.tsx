import RightArrow from "./RightArrow"
import LeftArrow from "./LeftArrow"
import PageNumber from "./PageNumber"
const Pagination = () => {
  return (
    <div className="PaginationContainer">
      
      <RightArrow/>
      <PageNumber Number={"01"} classType={"ActivePageNumber"} />
      <PageNumber Number={"02"} classType={"PageNumberContainer"} />
      <PageNumber Number={"03"} classType={"PageNumberContainer"} />
      <PageNumber Number={"04"} classType={"PageNumberContainer"} />
      <PageNumber Number={"05"} classType={"PageNumberContainer"} />
      <PageNumber Number={"06"} classType={"PageNumberContainer"} />
      <LeftArrow/>
      
    </div>
  )
}

export default Pagination
