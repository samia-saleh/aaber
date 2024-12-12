import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineDelete } from "react-icons/ai";

const DeletDialog = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button  className="PrimaryButtonIcon m-2">
       <AiOutlineDelete/>
      </Button>
    </DialogTrigger>
    <DialogContent >
      <DialogHeader >
        <DialogTitle>
          <h2>هل تريد حذف هذا الحقل   </h2>
        </DialogTitle>
        <p>
              هل انت متاكد من حذف الحقل بشكل  نهائي  
        </p>
        <PrimaryButton txt={"حذف الحقل"}/>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default DeletDialog
