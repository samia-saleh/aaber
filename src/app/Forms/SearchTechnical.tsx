import SecondaryDropDown from "../Inputs/SecondaryDropDown";
import TextBox from "../Inputs/TextBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import Input from "../Inputs/Input";
import PrimaryDropDown from "../Inputs/PrimaryDropDown";

const SearchTechnical = () => {
  return (
    <div className="FormContainer" >
      <div className="TechnicalSearchFormTitle">
        <h2>بحث عن فني</h2>
      </div>
      <form className="SearchForm">
        <div className="SearchFormBody Technical">
          <div className="Row1">
            <label  className="max-w-32 text-left">العنوان الحالي :</label>
            <SecondaryDropDown Trigger={"الدولة"}>
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </SecondaryDropDown>
            <TextBox Placeholder={"المنطقة/المحافظة"} Name={"Governorate"} />
            <TextBox Placeholder={"المدينة (اختياري)"} Name={"Governorate"} />
          </div>
          <div className="Row2">

            <label className=" text-left"> التخصص الفني : </label>
            <PrimaryDropDown Trigger={""}>
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </PrimaryDropDown>

            <div>
            <label> مجال العمل :</label>
            <Input Placeholder={""} Name={""} />
            </div>
            <div>
            <label className=" "> التخصص :</label>
            <Input Placeholder={""} Name={""} />
            </div>
          </div>
          <div className="Row3">
            <div className=" flex flex-row">
            <label  className="max-w-32 ">اوقات العمل :</label>
            <PrimaryDropDown Trigger={"  "}>
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </PrimaryDropDown>
            </div>
            <div className=" flex flex-row">
            <label> طريقة العمل :</label>
            <PrimaryDropDown Trigger={" "}>
              <label className="active">قطر</label>
              <label>الكويت</label>
              <label>مصر</label>
            </PrimaryDropDown>
            </div>
          </div>
        </div>
        <PrimaryButton txt={" بحث عن فني "} />
      </form>
    </div>
  );
};

export default SearchTechnical;
