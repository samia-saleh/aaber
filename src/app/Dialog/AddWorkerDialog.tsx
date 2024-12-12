import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
import Input from "../Inputs/Input";
// import PrimaryDropDown from "../Inputs/PrimaryDropDown";
import FileInput from "../Inputs/FileInput";
import { DatePicker } from "../Inputs/DatePicker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextArea from "../Inputs/TextArea";

const AddWorkerDialog = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="PrimaryButtonIcon m-2">
         <PrimaryButton txt={"تسجيل جديد"}/>
        </Button>
      </DialogTrigger>
      <DialogContent className="FormContainer p-0 max-h-screen overflow-x-scroll">
        <DialogHeader className="">
          <DialogTitle>
            {/* <h2>    اضافة عامل </h2> */}
          </DialogTitle>
        </DialogHeader>

        <form className="SearchForm">
          <div className="AddFormBody  Worker ">
            <div className="Row1">
              <label className="w-32 text-left"> الاسم الكامل :</label>
              <Input Placeholder={""} Name={""} />
              <label className=""> تاريخ الميلاد :</label>
              <DatePicker />
              <label className=""> العمر (23) سنة</label>
            </div>
            <div className="Row2">
              <label  className="w-32 text-left"> الجنسية :</label>
              <SecondaryDropDown Trigger={""}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <label> رقم الهوية/الجواز :</label>
              <Input Placeholder={""} Name={""} />
              <label>  رخصة القيادة :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row3">
              <label  className="w-32 text-left"> العنوان الحالي :</label>
              <SecondaryDropDown Trigger={"الدولة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
              <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
            </div>
            <div className="Row4">
              <label  className="w-32 text-left"> تلفون : </label>
              <Input Placeholder={""} Name={""} />
              <label> الجوال </label>
              <Input Placeholder={""} Name={""} />
              <label> واتس اب </label>
              <Input Placeholder={""} Name={""} />
              <label> الايميل : </label>
              <Input Placeholder={""} Name={""} />
            </div>
            <hr className="w-full my-3"></hr>
            <div className="Row5 ">
            <label className="w-36 text-left"> المؤهل التعليمي :</label>
            <TextArea Placeholder={
                "مثل شهادة ثانوية، بكالوريوس، دبلوم مع التخصص (اختياري)"
              }
              Name={""}
            />
          </div>
          <div className="Row6 ">
            <label className="w-36 text-left">  الشهادات والتدريب :</label>
            <TextArea Placeholder={
                "إن وجدت، مثل شهادات الانجاز او دورات اضافية أو شهادات المهارات الحرفية (اختياري)"
              }
              Name={""}
            />
          </div>
          <div className="Row7">
            <label className="w-36 text-left"> مهارات عملية :</label>
            <TextArea Placeholder={
                "مثل النجارة، السباكة، الكهرباء، قيادة السيارة ، إلخ (اختياري)"
              }
              Name={""}
            />
          </div>
          <div className="Row8">
              <label className="w-36 text-left"> اللغات : </label>
              <Input Placeholder={"اللغات التي يجيدها او يجيد قراءتها "} Name={""} />
              <label>  استخدام الكمبوتر :</label>
              <Input Placeholder={"هل يجيد استخدام الكمبيوتر والبرامج التي يجيدها"} Name={""} />
            </div>
            <div className="Row9 ">
            <label className="w-36 text-left">  الخبرات السابقة :</label>
            <TextArea Placeholder={
                "اعمال او وظائف سابقة  (اختياري)"
              }
              Name={""}
            />
          </div>
          <div className="Row10 ">
            <label className="w-36 text-left">  صور الوثائق :</label>
            <FileInput InputName={""}/>
          </div>
          <div className="Row11">
              <label className="w-36 text-left" > نوع العمل المطلوب :</label>
              <SecondaryDropDown Trigger={""}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <label> فترة التوفر :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row12">
              <label className="w-36 text-left">  مجال العمل : </label>
              <Input Placeholder={""} Name={""} />
              <label>   التخصص :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row13">
              <label> موقع العمل المفضل :</label>
              <SecondaryDropDown Trigger={"الدولة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
              <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
            </div>


          </div>
          <PrimaryButton txt={"تسجيل  عامل"} />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddWorkerDialog
