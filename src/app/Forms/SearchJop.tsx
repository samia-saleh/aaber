import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import PrimaryButton from "../Buttons/PrimaryButton"
import Input from "../Inputs/Input"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { DatePicker } from "../Inputs/DatePicker"

const SearchJop = () => {
  return (
    <div className='FormContainer'>
    <div className='BloodSearchFormTitle'>
      <h2>
      بحث عن وظيفة
      </h2>
      </div>
    <form className="SearchForm">
  <div className="SearchFormBody SearchJops">
        <div className="Row1">
        <label className=""> متطلبات الوظيفة</label>
          <SecondaryDropDown Trigger={"المجال "} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <PrimaryDropDown Trigger={"المؤهل المطلوب"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown> 
          <PrimaryDropDown Trigger={" المسمى الوظيفي "} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown> 
      </div>
      <div className="Row2 mb-5">
      <label className=""> موقع الوظيفة :</label>
      <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
         
      </div>
      {/* <div className="flex flex-col gap-4 " > */}
      <div className="Row3 ">
        {/* <div className="flex flex-row items-center flex-1 min-w-72 gap-1"> */}
        <label className="">متوسط الراتب : من :</label>
        <Input Placeholder={""} Name={""}/>
        {/* </div> */}
        {/* <div className="flex flex-row  items-center mx-1  flex-1 min-w-40"> */}
        <label >  الى :</label>
        <Input Placeholder={""} Name={""} />
        {/* </div> */}
      {/* <div className="flex flex-row items-center flex-1"> */}
      <SecondaryDropDown Trigger={"العمله"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
      {/* </div> */}
        </div>     
        <div className="Row4 ">
        {/* <div className="flex flex-row items-center gap-1"> */}
        <label className="max-w-56">  تاريخ آخر تقديم للوظيفة :  من :</label>
        <DatePicker/>
        {/* </div> */}
        <div className="flex flex-row items-center gap-1">
        <label>  الى :</label>
        <DatePicker/>
        </div>
      
        </div> 
        <div className="Row5 ">
        {/* <div className="flex flex-row items-center gap-1"> */}
        <label className="max-w-56">  تاريخ النشر للوظيفة :  من :</label>
        <DatePicker/>
        {/* </div> */}
        <div className="flex flex-row items-center">
        <label>  الى :</label>
        <DatePicker/>
        </div>
      
        </div> 
      {/* </div> */}
 
  </div>
  <PrimaryButton txt={" بحث عن وظيفة "}/>
    </form>
  </div>
  )
}

export default SearchJop
