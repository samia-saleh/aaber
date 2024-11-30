import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import DateInput from "../Inputs/DateInput"
import PrimaryButton from "../Buttons/PrimaryButton"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { DatePicker } from "../Inputs/DatePicker"


const TripSearch = () => {
  return (
    <div className='FormContainer'>
      <div className='TripFormTitle'>
        <h2>
      بحث عن رحلة
        </h2>
        </div>
      <form className="TripForm">
    <div className="TripFormBody">
    <div className="Col1">
             <label>بداية الرحلة : من :</label>
            <label>نهاية الرحلة : الى :</label>
             <label> خلال الفترة :   من :</label>
       
           
        </div>
    <div className="Col2">
             {/* <label>بداية الرحلة : من :</label> */}
            <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            {/* <label>نهاية الرحلة : الى :</label> */}
           <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <DatePicker/>
            {/* <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} /> */}
            {/* <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} /> */}
           
        </div>
        <div className="Col3">
           {/* <label>نهاية الرحلة : الى :</label> */}
           {/* <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown> */}
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"}/>
            <span>الى :<DatePicker/></span>
            {/* <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/> */}
           
        </div>
        <div className="Col4">
        {/* <label> خلال الفترة :   من :</label> */}
        {/* <DatePicker/>
        <DatePicker/> */}
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
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

export default TripSearch
