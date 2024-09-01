import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { DualRangeSlider } from "./ui/dual-slider";

const FmultiSelect = ({
  fields,
  setFields,
}: {
  fields: dataType[];
  setFields: Dispatch<SetStateAction<dataType[]>>;
}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [range, setRange] = useState([1, 1]);

//   const [selected, setSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    label: "",
    placeholder: "",
    desc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
    setRange([range[0], options.length+1]);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, label, placeholder, desc } = formData;

    if (fields.some((field) => field.name === name)) {
      alert("Please choose a unique name");
      return;
    }

    setFields([
      ...fields,
      {
        kind: "multiSelect",
        name:name?name.replaceAll(" ","_"):name,
        label: label,
        desc: desc,
        options: options,
        min:range[0],
        max:range[1],
      },
    ]);

    console.log(fields);
    // Reset form data
    setFormData({ name: "", label: "", placeholder: "", desc: "" });
    setOptions([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-10">
      <Input
        placeholder="Enter name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter label"
        name="label"
        value={formData.label}
        onChange={handleChange}
      />
     
      <Input
        placeholder="Description"
        name="desc"
        value={formData.desc}
        onChange={handleChange}
      />

      <div className="flex gap-5 flex-col">
        <strong>Options</strong>
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
           <Input value={option} onChange={(e) => handleOptionChange(index, e.target.value)} placeholder="Enter option"/>
            <Button
              type="button"
              onClick={() => handleRemoveOption(index)}
              variant="ghost"
            >
              Remove
            </Button>
          </div>
        ))}
        <Button onClick={handleAddOption} variant="ghost" type="button">
          Add Option
        </Button>
      </div>
      {options.length > 1 && (
        <>
         <span className="mb-10">Select Range for multiselect</span>
         <div className="w-full space-y-5 px-10 ">
           
         <DualRangeSlider
           label={(value) => <span>{value}</span>}
           value={range}
           onValueChange={setRange}
           min={1}
           max={options.length}  
           step={1}
         />
       </div></>
      )}
     
      <Button type="submit">Add Input</Button>
    </form>
  );
};

export default FmultiSelect;
