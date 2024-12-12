import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
// import DateInput from "../Inputs/DateInput"
import PrimaryButton from "../Buttons/PrimaryButton";
import PrimaryDropDown from "../Inputs/PrimaryDropDown";
import { DatePicker } from "../Inputs/DatePicker";

const AddTrip = () => {
  return (
    <div className="FormContainer">
      <div className="AddTripFormTitle">
        <h2>تسجيل رحلة</h2>
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
        <label className="max-w-32"> تاريخ الرحلة:</label>
        <div >
        <DatePicker/>
        {/* <span>الى :<DatePicker/></span> */}
        </div>
        <PrimaryDropDown Trigger={"نوع السيارة  (اختياري)"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
        </div>
       
    </div>
  <PrimaryButton txt={" تسجيل رحلة"}/>
    </form>
      <label>تم الحصول على عدد (4) رحلة مطابقة</label>
    </div>
  );
};

export default AddTrip;
