"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Finput from "@/components/Finput";
import Fswitch from "@/components/Fswitch";
import Fselect from "@/components/Fselect";
import FmultiSelect from "@/components/FmultiSelect";
import { Modal } from "@/components/modal";
import { generateFormCode } from "@/lib/generate";
import Rinput from "@/components/Rinput";
import Rselect from "@/components/Rselect";
import RmultiSelect from "@/components/RmultiSelect";
import Rswitch from "@/components/Rswitch";
import autoAnimate from "@formkit/auto-animate";

import LeftSideBar from "@/components/LeftSideBar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ArrowBigUp,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  EllipsisVertical,
  Trash2Icon,
} from "lucide-react";

// Define the type for input fields
const data: dataType[] = [
  {
    kind: "input",
    name: "nameInput",
    label: "Name Label",
    placeholder: "Enter name",
    type: "text",
    min: 5,
    max: null,
    desc: "",
  },
  {
    kind: "switch",
    name: "myToggle",
    label: "Are you stupid?",
    default: false,
    desc: "",
  },
  {
    kind: "select",
    name: "mySelect",
    placeholder: "Select an option",
    label: "option",
    options: ["Option 1", "Option 2", "Option 3"],
    desc: "",
  },
  {
    kind: "multiSelect",
    name: "myMultiSelect",
    label: "option",
    options: ["Option 1", "Option 2", "Option 3"],
    desc: "choose any 2",
    min: 1,
    max: 3,
  },
];
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTheme } from "next-themes";

const Home = () => {
  const { setTheme } = useTheme()
 setTheme('dark')
  const baseSchema = z.object({});

  const [formSchema, setFormSchema] = useState(z.object({}));
  const [fields, setFields] = useState<dataType[]>(data);
  const [tab, setTab] = useState("all");
  const listRef = useRef<HTMLFormElement>(null);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  type formSchemaType = z.infer<typeof formSchema>;

  useEffect(() => {
    if (listRef.current) {
      autoAnimate(listRef.current);
    }
  }, [fields]);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: formSchemaType) => {
    toast({
      title: "Chapter created successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data); // Replace with your submission logic
  };

  useEffect(() => {
    let updatedSchema = baseSchema;

    fields.forEach((field) => {
      let zodType;

      switch (field.kind) {
        case "input": {
          switch (field.type) {
            case "text":
              zodType = z.string();
              break;
            case "number":
              zodType = z.coerce.number();
              break;
            case "email":
              zodType = z.string().email();
              break;
            default:
              throw new Error(`Unsupported field type: ${field.type}`);
          }

          // Apply min constraint if present
          if (field.min !== null) {
            if (field.type === "text" || field.type === "email") {
              zodType = zodType.min(
                field.min,
                `${field.label} must be at least ${field.min} characters long`
              );
            } else if (field.type === "number") {
              zodType = zodType.min(
                field.min,
                `${field.label} must be at least ${field.min}`
              );
            }
          }

          // Apply max constraint if present
          if (field.max !== null) {
            if (field.type === "text" || field.type === "email") {
              zodType = zodType.max(
                field.max,
                `${field.label} must be at most ${field.max} characters long`
              );
            } else if (field.type === "number") {
              zodType = zodType.max(
                field.max,
                `${field.label} must be at most ${field.max}`
              );
            }
          }

          updatedSchema = updatedSchema.extend({
            [field.name]: zodType,
          });

          break;
        }

        case "switch": {
          updatedSchema = updatedSchema.extend({
            [field.name]: z.boolean().default(field.default),
          });
          break;
        }
        case "select": {
          updatedSchema = updatedSchema.extend({
            [field.name]: z.string(),
          });
          break;
        }
        case "multiSelect": {
          updatedSchema = updatedSchema.extend({
            [field.name]: z
              .string()
              .array()
              .min(field.min, `Please select at least ${field.min}`)
              .max(field.max, `Please select at most ${field.max}`)
              .default([]),
          });
          break;
        }
        default:
          throw new Error(`Unsupported field kind`);
      }
    });

    setFormSchema(updatedSchema);
  }, [fields]);

  const renderContent = () => {
    switch (tab) {
      case "input":
        return <Finput fields={fields} setFields={setFields} />;
      case "switch":
        return <Fswitch fields={fields} setFields={setFields} />;
      case "select":
        return <Fselect fields={fields} setFields={setFields} />;
      case "multiSelect":
        return <FmultiSelect fields={fields} setFields={setFields} />;
      default:
        return <div>Select any input to start</div>;
    }
  };

  const [generatedCode, setGeneratedCode] = useState("");

  const deleteField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };
  const moveFieldUp = (index: number) => {
    if (index > 0) {
      setFields((prevFields) => {
        const newFields = [...prevFields];
        [newFields[index - 1], newFields[index]] = [
          newFields[index],
          newFields[index - 1],
        ];
        return newFields;
      });
    }
  };
  const moveFieldDown = (index: number) => {
    if (index < fields.length - 1) {
      setFields((prevFields) => {
        const newFields = [...prevFields];
        [newFields[index + 1], newFields[index]] = [
          newFields[index],
          newFields[index + 1],
        ];
        return newFields;
      });
    }
  };
  const handleCode = () => {
    const code = generateFormCode(fields);
    setGeneratedCode(code);
  };

  const getCorrectField = (e: dataType, index: number, form: UseFormReturn) => {
    const fieldControl = (
      <>
        <Button
          className="m-0 p-0 rounded-none h-5 w-5"
          variant="secondary"
          size="icon"
          type="button"
          onClick={() => moveFieldUp(index)}
        >
          <ChevronUp />
        </Button>
        <Button
          className="m-0 p-0 rounded-none h-5 w-5"
          variant="secondary"
          size="icon"
          type="button"
          onClick={() => moveFieldDown(index)}
        >
          <ChevronDown />
        </Button>
        <Button
          className="m-0 p-0 rounded-none h-5 w-5"
          variant="secondary"
          size="icon"
          type="button"
          onClick={() => deleteField(index)}
        >
          <Trash2Icon />
        </Button>
      </>
    );

    switch (e.kind) {
      case "input":
        return (
          <div key={e.name} className="flex justify-between items-center">
            <FormField
              control={form.control}
              name={e.name as keyof formSchemaType}
              render={({ field: formField }) => (
                <Rinput e={e} formField={formField} />
              )}
            />
            <div className="">{fieldControl}</div>
          </div>
        );

      case "switch":
        return (
          <div key={e.name} className="flex justify-between items-center">
            <FormField
              control={form.control}
              name={e.name as keyof formSchemaType}
              render={({ field }) => <Rswitch e={e} field={field} />}
            />
            <div>{fieldControl}</div>
          </div>
        );

      case "select":
        return (
          <div key={e.name} className="flex justify-between items-center">
            <FormField
              control={form.control}
              name={e.name as keyof formSchemaType}
              render={({ field }) => <Rselect e={e} field={field} />}
            />
            <div>{fieldControl}</div>
          </div>
        );

      case "multiSelect":
        return (
          <div key={e.name} className="flex justify-between items-center">
            <FormField
              control={form.control}
              name={e.name as keyof formSchemaType}
              render={({ field }) => <RmultiSelect e={e} field={field} />}
            />
            <div className="justify-start">{fieldControl}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center h-screen  scroll-m-0 ">
      <LeftSideBar setTab={setTab} />

      <div className="w-2/5  border-x flex h-full  overflow-y-scroll ">
        <Tabs defaultValue="Preview" className="w-full h-full">
          <TabsList className="flex">
            <TabsTrigger value="Preview" className="w-full">
              Preview
            </TabsTrigger>
            <TabsTrigger value="Code" onClick={handleCode} className="w-full">
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Preview">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 px-5 h-full"
                ref={parent}
              >
                {fields.map((e, index) => getCorrectField(e, index, form))}
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="Code" className="h-full">
            <pre className=" text-wrap text-sm my-10  p-2 flex justify-between items-center bg-muted rounded-md mx-2 ">
              <code>
                npx shadcn@latest add form input checkbox select switch{" "}
              </code>
              <Button
                className="p-0 m-0 aspect-square  "
                onClick={() => {
                  navigator.clipboard.writeText(
                    "npx shadcn@latest add form input checkbox select switch"
                  );
                  toast({
                    title: "Copied!",
                    description: "Code has been copied to clipboard.",
                    variant: "default",
                  });
                }}
              >
                <ClipboardList className="w-5 h-5" />
              </Button>
            </pre>

            <pre className="code-preview text-wrap text-sm relative bg-muted m-2 rounded-md px-2">
              <Button
                className="p-0 m-0 aspect-square  absolute top-3 right-3"
                onClick={() => {
                  navigator.clipboard.writeText(generatedCode);
                  toast({
                    title: "Copied!",
                    description: "Code has been copied to clipboard.",
                    variant: "default",
                  });
                }}
              >
                <ClipboardList />
              </Button>
              <code>{generatedCode}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-2/5  ">
        <div className="flex w-full flex-col gap-4 rounded-lg  p-4">
          <h2 className="text-xl font-semibold">Field Setting</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
