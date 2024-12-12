import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
// import PrimaryDropDown from "../Inputs/PrimaryDropDown";
import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import Input from "../Inputs/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaRegEdit } from "react-icons/fa";

const EditCar = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="Icon">
          <FaRegEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="FormContainer p-0">
        <DialogHeader className="AddCarFormTitle">
          <DialogTitle>
            <h2>تعديل سيارة</h2>
          </DialogTitle>
        </DialogHeader>

        <form className="SearchForm">
          <div className="AddFormBody AddCar">
            <div className="Row1">
              <label> نوع السيارة</label>
              <SecondaryDropDown Trigger={""}>
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
          <PrimaryButton txt={"  حفظ التعديلات"} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCar;
