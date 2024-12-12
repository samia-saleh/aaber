import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
import Input from "../Inputs/Input";
import PrimaryDropDown from "../Inputs/PrimaryDropDown";
import { DatePicker } from "../Inputs/DatePicker";
import TextArea from "../Inputs/TextArea";
import FileInput from "../Inputs/FileInput";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit } from "react-icons/fa";

const EditGraduate = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="Icon">
       <FaRegEdit />
      </Button>
    </DialogTrigger>
    <DialogContent className="FormContainer p-0">
      <DialogHeader className="AddGraduateFormTitle">
        <DialogTitle>
          <h2> تعديل خريج  </h2>
        </DialogTitle>
      </DialogHeader>

      <form className="SearchForm">
          <div className="AddFormBody AddGraduate gap-0">
            <div className="Row1 ">
              <label className="max-w-32"> الاسم الكامل :</label>
              <Input Placeholder={""} Name={""} />
              <label className=""> تاريخ الميلاد :</label>
              <DatePicker />
              <label className=""> العمر (23) سنة</label>
            </div>
            <div className="Row2">
              <label className="max-w-32"> الجنسية :</label>
              <SecondaryDropDown Trigger={""}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <label> رقم الهوية/الجواز :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row3">
              <label className="max-w-32"> العنوان الحالي :</label>
              <SecondaryDropDown Trigger={"الدولة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
              <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
            </div>
            <div className="Row4">
              <label className="max-w-32"> تلفون : </label>
              <Input Placeholder={""} Name={""} />
              <label> الجوال </label>
              <Input Placeholder={""} Name={""} />
              <label> واتس اب </label>
              <Input Placeholder={""} Name={""} />
              <label> الايميل : </label>
              <Input Placeholder={""} Name={""} />
            </div>
            <hr className="w-full my-3"></hr>
            {/* <div className="Row4">
              <label> الايميل : </label>
              <Input Placeholder={""} Name={""} />
            </div> */}
            <div className="Row5 ">
              <label className="max-w-60 ">
                اسم الجامعة او الجهة التعليمية :
              </label>
              <Input Placeholder={""} Name={""}></Input>
              <label className="w-24  "> الكلية :</label>
              <Input Placeholder={""} Name={""}></Input>
              <label className="w-32 "> التخصص :</label>
              <Input Placeholder={""} Name={""}></Input>
            </div>
            <div className="Row6 ">
            <label className="max-w-60 ">درجة التخرج :</label>
              <SecondaryDropDown Trigger={""}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <label className="max-w-24 "> سنة التخرج :</label>
              <Input Placeholder={""} Name={""}></Input>
              <label className="max-w-32 "> المعدل التراكمي :</label>
              <Input Placeholder={""} Name={""}></Input>
            </div>
            <div className="Row7">
            <label className=" "> التدريب العملي :</label>
              <TextArea
                Placeholder={
                  "البرامج أو المشاريع التي شارك فيها أثناء الدراسة (اختياري)"
                }
                Name={""}
              />
            </div>
            <div className="Row8 ">
              <label className=""> الخبرات السابقة :</label>
              <TextArea Placeholder={
                  "إذا كان لديه عمل أو تدريب سابق أثناء او بعد الدراسة (اختياري)"
                }
                Name={""}
              />
            </div>
            <div className="Row9 ">
              <label className=" "> صور الوثائق :</label>
              <FileInput InputName={""}/>
             
            </div>
          </div>
          <PrimaryButton txt={"  حفظ التعديلات"} />
        </form>
    </DialogContent>
  </Dialog>
  )
}

export default EditGraduate
