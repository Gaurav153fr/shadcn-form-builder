import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Fselect = ({
  fields,
  setFields,
}: {
  fields: dataType[];
  setFields: Dispatch<SetStateAction<dataType[]>>;
}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    label: '',
    placeholder: '',
    desc:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, label, placeholder,desc } = formData;

    if (fields.some((field) => field.name === name)) {
      alert("Please choose a unique name");
      return;
    }

    setFields([
      ...fields,
      {
        kind: "select",
        name:name?name.replaceAll(" ","_"):"",
        label: label,
        desc:desc,
        placeholder: placeholder,
        options: options,
      },
    ]);

    console.log(fields);
    // Reset form data
    setFormData({ name: '', label: '', placeholder: '' ,desc:""});
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
        placeholder="Enter placeholder"
        name="placeholder"
        value={formData.placeholder}
        onChange={handleChange}
      />
          <Input placeholder="Description" name="desc" value={formData.desc} onChange={handleChange} />

      <div className="flex gap-5 flex-col">
        <strong>Options</strong>
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              placeholder={`Enter option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
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

      <Button type="submit">Add Input</Button>
    </form>
  );
};

export default Fselect;
