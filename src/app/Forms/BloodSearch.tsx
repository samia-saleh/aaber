import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
// import DateInput from "../Inputs/DateInput"
import PrimaryButton from "../Buttons/PrimaryButton"
import CheckInput from "../Inputs/CheckInput"

const BloodSearch = () => {
  return(
    <div className='FormContainer'>
    <div className='BloodSearchFormTitle'>
      <h2>
      بحث عن متبرع / فصيلة دم
      </h2>
      </div>
    <form className="SearchForm">
  <div className="SearchFormBody BloodSearch">
        <div className="Row1">
           <label>بحث عن متبرع بفصيلة الدم :</label>
          <SecondaryDropDown Trigger={"الفصيلة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <CheckInput Content={"    إدراج فصائل الدم المتوافقة مع المصلبة"}/>          
         
      </div>
      <div className="Row2">
        <label>المكان :</label>
      <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
         
      </div>     
  </div>
  <PrimaryButton txt={" بحث "}/>
    </form>
  </div>
  )
}

export default BloodSearch
