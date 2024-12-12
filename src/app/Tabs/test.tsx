import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import Input from "../Inputs/Input"
import PrimaryButton from "../Buttons/PrimaryButton"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import CheckInput from "../Inputs/CheckInput"

const test = () => {
  return (
    <div>
      <form className="SearchForm">
        <div className="AddFormBody ">
        <div className="Row1">
    <label className="w-60 text-left">اسم الجامعة او الجهة التعليمية :</label>
    <Input Placeholder={""} Name={""}></Input>
    <label className=" w-24 text-left">  الكلية :</label>
    <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="Row2">
      <label className="w-60 text-left">    التخصص :</label>
      <Input Placeholder={""} Name={""}></Input>
      <label className="w-24 text-left">درجة التخرج :</label>
          <SecondaryDropDown Trigger={""} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
   
      </div>
     <div className="GraduateGPA flex flex-col gap-3">
     <div className="Row3">
      <label className="w-60 text-left"> سنة التخرج : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 text-left"> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="Row4">
      <label className="w-60 text-left">   المعدل التراكمي : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 text-left"> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
     </div>
        </div>
        <PrimaryButton txt={"تسجيل  فني"} />
      </form>
    </div>
  )
}

export default test
