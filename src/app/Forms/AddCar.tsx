import PrimaryButton from "../Buttons/PrimaryButton"
// import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import Input from "../Inputs/Input"
import SecondaryDropDown from "../Inputs/SecondaryDropDown"

const AddCar = () => {
  return (
    <div className='FormContainer'>
    <div className='AddCarFormTitle'>
      <h2>
      تسجيل سيارة
      </h2>
      </div>
    <form className="SearchForm">
  <div className="AddFormBody AddCar">
  <div className="Row1">
           <label>  نوع السيارة</label>
           <SecondaryDropDown Trigger={""} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <label> الموديل</label>
          <Input Placeholder={""} Name={""} />
     
         
      </div>
  <div className="Row2">
          <label> اسم السائق</label>
          <Input Placeholder={""} Name={""} />

         
      </div>
      <div className="Row3">
      <label> الجوال </label>
      <Input Placeholder={""} Name={""} />
      <label> واتس اب </label>
      <Input Placeholder={""} Name={""} />

      </div>
     
  </div>
  <PrimaryButton txt={" اضافة سيارة"}/>
    </form>
  </div>
  )
}

export default AddCar
