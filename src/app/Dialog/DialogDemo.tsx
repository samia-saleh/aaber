import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextArea from "../Inputs/TextArea";
import { AiOutlineDelete } from "react-icons/ai";
// import { FaRegEdit } from "react-icons/fa";
export default function DialogDemo() {
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
            <h2>حذف </h2>
          </DialogTitle>
          <p>
            هل
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
