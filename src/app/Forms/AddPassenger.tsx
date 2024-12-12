import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import Input from "../Inputs/Input"
import NumricalInput from "../Inputs/NumricalInput"
import TextBox from "../Inputs/TextBox"
import { DatePicker } from "../Inputs/DatePicker"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"


const AddPassenger = () => {
  return (
    <div className='FormContainer'>
    <div className='AddPassengerFormTitle'>
      <h2>
      تسجيل راكب 
      </h2>
      </div>
    <form className="SearchForm">
  <div className="AddFormBody AddPassenger">
  <div className="Row1">
           <label className="max-w-32">   عدد الركاب الكلي  :</label>
           <NumricalInput/>
          <label> عوائل :</label>
          <NumricalInput/>
          <div className="flex flex-row flex-1 gap-1">
          <label> اسم الراكب : </label>
          <Input Placeholder={"(اختياري)"} Name={""} />
          </div>

         
      </div>
  <div className="Row2">
  <label className="max-w-32"> الجوال :</label>
      <Input Placeholder={""} Name={""} />
      <label> واتس اب :</label>
      <Input Placeholder={""} Name={""} />


         
      </div>
      <div className="Row3">
      <label className="max-w-32">بداية الرحلة : من :</label>
       
      <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"}/>
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>

      </div>
      <div className="Row4 flex flex-row gap-3">
      <label className="max-w-32">نهاية الرحلة: الى :</label>
      <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"}/>
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
      </div>
      <div className="Row5">
      <label className="max-w-32"> خلال الفترة :   من :</label>
      <DatePicker/>
      <label>الى</label>
      <DatePicker/>
      <PrimaryDropDown Trigger={"نوع السيارة  (اختياري)"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
      </div>
     
  </div>
  <PrimaryButton txt={"تسجيل الراكب"}/>
    </form>
  </div>
  )
}

export default AddPassenger
