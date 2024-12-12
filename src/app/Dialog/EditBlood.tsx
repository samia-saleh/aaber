import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
import Input from "../Inputs/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegEdit } from "react-icons/fa";
const EditBlood = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="Icon">
          <FaRegEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="FormContainer p-0 ">
        <DialogHeader className="AddBloodFormTitle">
          <DialogTitle>
            <h2>تعديل متبرع بالدم </h2>
          </DialogTitle>
        </DialogHeader>
        <form className="SearchForm ">
          <div className="AddFormBody AddBlood">
            <div className="Row1">
              <label> اسم المتبرع :</label>
              <Input Placeholder={""} Name={""} />
            </div>
            <div className="Row2">
              <label> فصيلة دم المتبرع :</label>
              <SecondaryDropDown Trigger={"الفصيلة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
            </div>
            <div className="Row3">
              <label>المكان :</label>
              <SecondaryDropDown Trigger={"الدولة"}>
                <label className="active">قطر</label>
                <label>الكويت</label>
                <label>مصر</label>
              </SecondaryDropDown>
              <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
              <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
            </div>
            <div className="Row4">
              <label> الجوال :</label>
              <Input Placeholder={""} Name={""} />
              <label> واتس اب :</label>
              <Input Placeholder={""} Name={""} />
            </div>
          </div>
          <PrimaryButton txt={"  حفظ التعديلات  "} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBlood;
