import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
// import DateInput from "../Inputs/DateInput"
import PrimaryButton from "../Buttons/PrimaryButton"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { DatePicker } from "../Inputs/DatePicker"

const PassengerSearch = () => {
  return (
    <div className='FormContainer'>
    <div className='PassengerSearchFormTitle'>
      <h2>
      بحث عن ركاب
      </h2>
      </div>
    <form className="SearchForm">
    <div className="SearchFormBody Trip">
    <div className="Row1">
             <label className="max-w-32">بداية الرحلة : من :</label>
            <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
           
        </div>
        <div className="Row2">
           <label className="max-w-32">نهاية الرحلة :الى:</label>
           <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />

            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
           
        </div>
        <div className="Row3">
        <label className="max-w-32"> خلال الفترة :   من :</label>
        
        <DatePicker/>
        <span className="flex flex-row flex-1 max-w-56">الى :<DatePicker/></span>
        
        <PrimaryDropDown Trigger={"نوع السيارة  (اختياري)"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
        </div>
       
    </div>
  <PrimaryButton txt={"عرض النتائج"}/>
    </form>
    <label>تم الحصول على عدد (4) رحلة مطابقة</label>
  </div>
  )
}

export default PassengerSearch
