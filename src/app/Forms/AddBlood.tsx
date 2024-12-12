import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import Input from "../Inputs/Input"
import PrimaryButton from "../Buttons/PrimaryButton"

const AddBlood = () => {
  return (
    <div className='FormContainer'>
    <div className='AddBloodFormTitle'>
      <h2>
      تسجيل متبرع بالدم 
      </h2>
      </div>
    <form className="SearchForm">
  <div className="AddFormBody AddBlood">
        <div className="Row1">
           <label> اسم المتبرع :</label>
      <Input Placeholder={""} Name={""} />         
         
      </div>
      <div className="Row2">
          <label> فصيلة دم المتبرع :</label>
          <SecondaryDropDown Trigger={"الفصيلة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
         
      </div>   
      <div className="Row3">

        <label>المكان :</label>
      <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
          <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
         
      </div>
      <div className="Row4">
      <label> الجوال:</label>
      <Input Placeholder={""} Name={""} />
      <label> واتس اب :</label>
      <Input Placeholder={""} Name={""} />

      </div> 
      
  </div>
  <PrimaryButton txt={" اضافة المتبرع "}/>
    </form>
  </div>
  )
}

export default AddBlood
