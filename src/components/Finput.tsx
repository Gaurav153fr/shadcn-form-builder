import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Finput = ({ fields, setFields }: { fields: any; setFields: any }) => {
  const createInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const type = formData.get("type") as string;
    const name = formData.get("name") as string;
    const placeholder = formData.get("placeholder") as string;
    const label = formData.get("label") as string;
    const desc = formData.get("desc") as string;
    const min = formData.get("min") as string;
    const max = formData.get("max") as string;
console.log(min,max);


    setFields([
      ...fields,
      {
        kind: "input",
        name:name?name.replaceAll(" ","_"):null,
        label,
        placeholder,
        desc: desc,
        type: type as "text" | "number" | "email",
        min: parseInt(min)?parseInt(min):null,
        max: parseInt(max)?parseInt(max):null,
      },
    ]);
  };

  return (
    <form onSubmit={createInput} className="flex flex-col gap-5 my-5">
      <Select name="type" defaultValue="text">
        <SelectTrigger>
          <SelectValue placeholder="Select input type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Input Type</SelectLabel>
            <SelectItem value="text">text</SelectItem>
            <SelectItem value="number">number</SelectItem>
            <SelectItem value="email">email</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input placeholder="Enter name" name="name" />
      <Input placeholder="Enter placeholder" name="placeholder" />
      <Input placeholder="Enter label" name="label" />
      <Input placeholder="Description" name="desc" />
      <div className="flex gap-5">
        <Input placeholder="min" name="min" />
        <Input placeholder="max" name="max" />
      </div>
      <Button type="submit">Add Input</Button>
    </form>
  );
};

export default Finput;
