import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
import Input from "../Inputs/Input";
import PrimaryDropDown from "../Inputs/PrimaryDropDown";
import { DatePicker } from "../Inputs/DatePicker";
import TextArea from "../Inputs/TextArea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit } from "react-icons/fa";

const EditJop = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="Icon">
          <FaRegEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="FormContainer p-0">
        <DialogHeader className="AddJopFormTitle">
          <DialogTitle>
            <h2> تعديل اعلان عن وظيفة </h2>
          </DialogTitle>
        </DialogHeader>

        <form className="SearchForm">
          <div className="AddFormBody AddJop">
            <div className="Row1">
            <label className="max-w-32 ">متطلبات الوظيفة:</label>
          <SecondaryDropDown Trigger={"المجال "} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </SecondaryDropDown>
              {/* <label> المؤهل المطلوب :</label> */}
              <PrimaryDropDown Trigger={"المؤهل المطلوب :"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </PrimaryDropDown>
              {/* <label> المسمى الوظيفي :</label> */}
              <PrimaryDropDown Trigger={"المسمى الوظيفي :"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </PrimaryDropDown>
            </div>
            <div className="Row2">
              <label className="max-w-32 "> موقع الوظيفة :</label>
              <SecondaryDropDown Trigger={"الدولة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
              <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
            </div>
            <div className="Row3">
              <label className="max-w-32 "> المعلن : </label>
              <Input Placeholder={""} Name={""} />
              <label> ايميل المعلن : </label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row4">
              <label className="max-w-32 " > تلفون المعلن : </label>
              <Input Placeholder={""} Name={""} />
              <label> الجوال :</label>
              <Input Placeholder={""} Name={""} />
              <label> واتس اب :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row5 ">
              <label className="max-w-32 "> متوسط الراتب :</label>
              <Input Placeholder={""} Name={""} />
              <SecondaryDropDown Trigger={"ريال سعودي"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
            </div>
            <div className="Row6">
              <div className="flex flex-row gap-4 ">
              <label className="w-44 "> تاريخ آخر تقديم للوظيفة :</label>
              <DatePicker />
              </div>
             <div className="flex flex-row "> <label className=""> تاريخ نشر الاعلان :</label>
             <DatePicker /></div>
            </div>
            <div className="Row7 ">
              <label className="max-w-44 "> تفاصيل الوظيفة :</label>
              <TextArea Placeholder={"اكتب هنا شرح اضافي عن الوظيفة المعلن عنها (اختياري)"} Name={""}/>
              
            </div>
            <div className="Row8 ">
              <label className="max-w-44 "> تفاصيل للمتقدم :</label>
              <TextArea Placeholder={"اكتب هنا شرح اضافي عن المواصفات المطلوبة للمتقدم (اختياري)"} Name={""} />
              
            </div>
          </div>
          <PrimaryButton txt={"  حفظ التعديلات"} />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditJop
