import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

const Fswitch = ({
  fields,
  setFields,
}: {
  fields: dataType[];
  setFields: Dispatch<SetStateAction<dataType[]>>;
}) => {
  const createInput = (formData: FormData) => {
    const name = formData.get("name") as string;
    const label = formData.get("label") as string;
    const desc = formData.get("desc") as string;

    const defaultBool = formData.get("default");
    const isChecked = defaultBool === "on";
    const nameExists = fields.some((field) => field.name === name);

    if (nameExists) {
      alert("Please choose a unique name");
      return; // Exit the function if the name is not unique
    }

    setFields([
      ...fields,
      {
        kind: "switch",
        name: name ? name.replaceAll(" ", "_") : "",
        desc: desc,
        label: label,
        default: isChecked,
      },
    ]);

    console.log(fields);
  };
  return (
    <form action={createInput} className="flex flex-col gap-5 my-10">
      <Input placeholder="Enter name" name="name" />
      <Input placeholder="Enter label" name="label" />
      <Input placeholder="Description" name="desc" />

      <div className="flex gap-5">
        <label
          htmlFor="default"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Default on
        </label>
        <Checkbox id="default" name="default" />
      </div>
      <Button type="submit">Add Input</Button>
    </form>
  );
};

export default Fswitch;
