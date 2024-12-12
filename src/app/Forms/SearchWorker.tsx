import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import PrimaryButton from "../Buttons/PrimaryButton"
import Input from "../Inputs/Input"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { DatePicker } from "../Inputs/DatePicker"

const SearchWorker = () => {
  return (
    <div className='FormContainer'>
    <div className='BloodSearchFormTitle'>
      <h2>
      بحث عن وظيفة
      </h2>
      </div>
    <form className="SearchForm">
  <div className="SearchFormBody AddJops">
        <div className="Row1">
          <SecondaryDropDown Trigger={"المجال "} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <SecondaryDropDown Trigger={"المؤهل المطلوب"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown> 
          <SecondaryDropDown Trigger={" المسمى الوظيفي "} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown> 
      </div>
      <div className="Row2">
      <PrimaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
         
      </div>
      <div className="flex flex-col gap-4  " >
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-row">
        <label className="w-56 ">متوسط الراتب : من :</label>
        <Input Placeholder={""} Name={""}/>
        </div>
        <div className="flex flex-row mx-8 ">
        <label >  الى :</label>
        <Input Placeholder={""} Name={""} />
        </div>
      <div className="flex flex-row">
      <PrimaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
      </div>
        </div>     
        <div className="flex flex-row gap-4 ">
        <div className="flex flex-row">
        <label className="w-56">  تاريخ آخر تقديم للوظيفة :  من :</label>
        <DatePicker/>
        </div>
        <div className="flex flex-row">
        <label>  الى :</label>
        <DatePicker/>
        </div>
      
        </div> 
        <div className="flex flex-row gap-4 ">
        <div className="flex flex-row">
        <label className="w-56">  تاريخ النشر للوظيفة :  من :</label>
        <DatePicker/>
        </div>
        <div className="flex flex-row">
        <label>  الى :</label>
        <DatePicker/>
        </div>
      
        </div> 
      </div>
 
  </div>
  <PrimaryButton txt={" بحث عن وظيفة "}/>
    </form>
  </div>
  )
}

export default SearchWorker
