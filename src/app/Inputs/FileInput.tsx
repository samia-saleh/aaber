import { Input } from "@/components/ui/input"
// import {Label} from "@/components/ui/"

const FileInput = ({InputName=""}) => {
  return (
    <div className="grid w-4/5 items-center gap-1.5  md:text-base sm:text-xs ">
    <Input id="picture" type="file" name={InputName} className=""/>
  </div>
  )
}

export default FileInput
