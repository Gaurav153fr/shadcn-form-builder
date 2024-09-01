"use client";

import { createPost } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState<dataType[]>([
    {
      kind: "select",
      name: "pokemon",
      options: ["charmander", "bulbasaur", "squirtle"],
    },
    {
      kind: "text",
      name: "username",
      placeholder: "Enter your name",
      type: textInputType.text,
    },
  ]);
  const [newType, setType] = useState("");

  const handleAdd = (formData: FormData) => {
    const type = formData.get("type") as string;
alert(type)
    switch (type) {
      case "input": {
        const name = formData.get("name") as string;
        const placeholder = formData.get("placeholder") as string;
        const inpType = formData.get("inputType") as string;

        setInputs((prev) => [
          ...prev,
          {
            kind: "text",
            name,
            placeholder: placeholder,
            type: inpType == "text" ? textInputType.text : textInputType.number,
          },
        ]);
      }
    }
  };

  return (
    <main className="flex  ">
      <form className="flex flex-col gap-10  w-2/3" action={createPost}>
        {inputs.map((input) => {
          switch (input.kind) {
            case "select":
              return (
                <div key={input.name}>
                  <Select name={input.name}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={input.name} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{input.name}</SelectLabel>
                        {input.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              );
            case "text":
              return <Input key={input.name} {...input} />;
          }
        })}
        <button type="submit">Submit</button>
      </form>

      <Select name="type" onValueChange={(e) => setType(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="selct input type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>label</SelectLabel>
            <SelectItem value="input">input</SelectItem>
            <SelectItem value="select">select</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <form className="w-1/3 bg-slate-900 h-screen" action={handleAdd}>
        {(() => {
          switch (newType) {
            case "input":
              return (
                <div>
                  <Input name="type"  value="input"  />

                  <Input name="name" placeholder="Enter  name" />
                  <Input name="placeholder" placeholder="Enter  placeholder" />
                  <Select name="inputType">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="selct input type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>label</SelectLabel>
                        <SelectItem value="number">number</SelectItem>
                        <SelectItem value="gmail">gamil</SelectItem>
                        <SelectItem value="text">text</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              );
            case "select":
              return <Select name="name" />;
            // Add more cases as needed
            default:
              return <>Slect a type</>; // Default content if no cases match
          }
        })()}

        <Button type="submit">Add</Button>
      </form>
    </main>
  );
}
interface selectInput {
  kind: "select"; // Discriminant property
  name: string;
  options: string[];
}

interface textInput {
  kind: "text"; // Discriminant property
  name: string;
  placeholder: string;
  type: textInputType;
}

type dataType = textInput | selectInput;
enum textInputType {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
}
