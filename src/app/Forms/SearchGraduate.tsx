import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import Input from "../Inputs/Input"
import PrimaryButton from "../Buttons/PrimaryButton"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { DatePicker } from "../Inputs/DatePicker"

const SearchGraduate = () => {
  return (
    <div className='FormContainer'>
    <div className='GraduateSearchFormTitle'>
      <h2>
      بحث عن خريج 
      </h2>
      </div>
    <form className="SearchForm">
  <div className="SearchFormBody SearchGraduate">
  <div className="flex flex-row justify-between gap-2">
    <label className="w-56">اسم الجامعة او الجهة التعليمية :</label>
    <Input Placeholder={""} Name={""}></Input>
    <label className="w-24 text-left">  الكلية :</label>
    <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="flex flex-row  justify-between gap-2">
      <label className="w-56 text-left">    التخصص :</label>
      <Input Placeholder={""} Name={""}></Input>
      <label className="w-24 text-left">درجة التخرج :</label>
          <PrimaryDropDown Trigger={""} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
   
      </div>
     <div className="GraduateGPA flex flex-col gap-3">
     <div className="flex flex-row gap-2">
      <label className="w-56 text-left"> سنة التخرج : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 text-left"> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="flex flex-row gap-2">
      <label className="w-56 text-left">   المعدل التراكمي : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 text-left"> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
     </div>

  {/* <div className="flex flex-row">
  <label>    التخصص :</label>
  <Input Placeholder={""} Name={""}></Input>
           <label>درجة التخرج :</label>
          <SecondaryDropDown Trigger={"الدولة"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
      </div>
      
      <div  className="flex flex-row">
      <div className="flex flex-row">
          <label> سنة التخرج : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
      </div>
      <div className="flex flex-row">
          <label>   المعدل التراكمي : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
      </div>
      </div> */}
     
  </div>
  <PrimaryButton txt={"عرض الخريجين "}/>
    </form>
  </div>
  )
}

export default SearchGraduate
