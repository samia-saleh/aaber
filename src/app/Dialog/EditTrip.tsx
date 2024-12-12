import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
// import DateInput from "../Inputs/DateInput"
import PrimaryButton from "../Buttons/PrimaryButton";
import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { Button } from "@/components/ui/button";
// import SecondaryDropDown from "../Inputs/SecondaryDropDown";
// import TextBox from "../Inputs/TextBox";
// import DateInput from "../Inputs/DateInput"
// import PrimaryButton from "../Buttons/PrimaryButton";
// import PrimaryDropDown from "../Inputs/PrimaryDropDown"
import { FaRegEdit } from "react-icons/fa";
import { DatePicker } from "../Inputs/DatePicker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EditTrip = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="Icon">
          <FaRegEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="FormContainer p-0">
        <DialogHeader className="AddTripFormTitle" >
          <DialogTitle> 
            <h2>تعديل رحلة</h2>
          </DialogTitle>
        </DialogHeader>

        <form className="SearchForm">
    <div className="SearchFormBody Trip">
    <div className="Row1">
             <label className="w-32">بداية الرحلة : من :</label>
            <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
           
        </div>
        <div className="Row2">
           <label className="w-32">نهاية الرحلة :الى:</label>
           <SecondaryDropDown Trigger={"الدولة"} >
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />

            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"}/>
           
        </div>
        <div className="Row3">
        <label className="w-32"> تاريخ الرحلة:</label>
        <div >
        <DatePicker/>
        {/* <span>الى :<DatePicker/></span> */}
        </div>
        <PrimaryDropDown Trigger={"نوع السيارة  (اختياري)"} >
            <label className="active">قطر</label>
            <label>الكويت</label>
            <label>مصر</label>
          </PrimaryDropDown>
        </div>
       
    </div>
  <PrimaryButton txt={" حفظ التعديلات "}/>
    </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTrip;
