import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SecondaryDropDown from "../Inputs/SecondaryDropDown"
import TextBox from "../Inputs/TextBox"
import Input from "../Inputs/Input"
import PrimaryButton from "../Buttons/PrimaryButton"
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import CheckInput from "../Inputs/CheckInput"

const Tab = () => {
  return (
    <Tabs defaultValue="Graduate" className="m-1" dir="rtl">
  <TabsList className="TabList">
    <TabsTrigger value="Graduate" className="TabTitl" >بحث عن خريج</TabsTrigger>
    <TabsTrigger value="Worker" className="TabTitl">بحث عن موظف-عامل</TabsTrigger>
  </TabsList>
  <TabsContent value="Graduate">
    <form className="SearchForm ">
  <div className="SearchFormBody Tab Tab1 ">
  <div className="Row1">
    <label className="">اسم الجامعة او الجهة التعليمية :</label>
    <Input Placeholder={""} Name={""}></Input>
    <label className="">  الكلية :</label>
    <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="Row2">
      <label className="">    التخصص :</label>
      <Input Placeholder={""} Name={""}></Input>
      <label className="w-24 ">درجة التخرج :</label>
          <SecondaryDropDown Trigger={""} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
   
      </div>
     <div className="GraduateGPA flex flex-col gap-3">
     <div className="Row3">
      <label className=""> سنة التخرج : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 "> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="Row4">
      <label className="">   المعدل التراكمي : من :</label>
         <Input Placeholder={""} Name={""}></Input>
         <label className="w-11 "> الى :</label>
          <Input Placeholder={""} Name={""}></Input>
   
      </div>
     </div>
     
  </div>
  <PrimaryButton txt={"عرض الخريجين "}/>
    </form>
    </TabsContent>

  <TabsContent value="Worker"><form className="SearchForm">
  <div className=" SearchFormBody Tab ">
  <div className="Row1">
    <label className="max-w-40 ">  نوع العمل المطلوب :</label>
    <SecondaryDropDown Trigger={""} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
          <label className=" w-24 ">   مجال العمل :</label>
    <Input Placeholder={""} Name={""}></Input>
   
      </div>
      <div className="Row2">
      <label className="max-w-40 ">    التخصص :</label>
      <Input Placeholder={""} Name={""}></Input>
      <CheckInput Content={"وجود رخصة قيادة"}/>  
      
   
      </div>
     <div className="GraduateGPA Row3">
     <label className="max-w-40 ">  العنوان الحالي :</label>
       
       <SecondaryDropDown Trigger={"الدولة"} >
             <label className="active">قطر</label>
             <label>الكويت</label>
             <label>مصر</label>
           </SecondaryDropDown>
           <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"}/>
           <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
     </div>
     <div className="GraduateGPA Row4">
     <label className="max-w-40 ">  موقع العمل المفضل :</label>
       
       <SecondaryDropDown Trigger={"الدولة"} >
             <label className="active">قطر</label>
             <label>الكويت</label>
             <label>مصر</label>
           </SecondaryDropDown>
           <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"}/>
           <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
     </div>
  </div>
  <PrimaryButton txt={"عرض  النتائج  "}/>
    </form></TabsContent>
</Tabs>

  )
}

export default Tab
