
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
nameInput: z.string().min(5),
myToggle: z.boolean().default(false),
mySelect: z.string(),
myMultiSelect: z.string().array().min(1).max(3).default([]),
chips: z.string().array().min(2).max(5).default([]),
your_name: z.string().min(2),
fal: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;

const MyForm = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: formSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-[500px] m-auto gap-5 my-10">
        
<FormField
  control={form.control}
  name="nameInput"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Name Label</FormLabel>
      <FormControl>
        <Input placeholder="Enter name" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="myToggle"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Are you stupid?</FormLabel>
      <FormControl>
        <Switch checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="mySelect"
  render={({ field }) => (
    <FormItem>
      <FormLabel>option</FormLabel>
      <FormControl>
        <Select {...field} onValueChange={field.onChange} value={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Option 1">Option 1</SelectItem>
<SelectItem value="Option 2">Option 2</SelectItem>
<SelectItem value="Option 3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="myMultiSelect"
  render={({ field }) => (
    <FormItem>
      <FormLabel>option</FormLabel>
      <FormControl>
        <div className="flex flex-col gap-5">
          
          <div className="flex items-center space-x-2" key="Option 1">
            <Checkbox
              id="Option 1"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "Option 1"]
                  : currentValue.filter((value) => value !== "Option 1");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("Option 1")}
            />
            <Label htmlFor="Option 1">Option 1</Label>
          </div>

          <div className="flex items-center space-x-2" key="Option 2">
            <Checkbox
              id="Option 2"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "Option 2"]
                  : currentValue.filter((value) => value !== "Option 2");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("Option 2")}
            />
            <Label htmlFor="Option 2">Option 2</Label>
          </div>

          <div className="flex items-center space-x-2" key="Option 3">
            <Checkbox
              id="Option 3"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "Option 3"]
                  : currentValue.filter((value) => value !== "Option 3");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("Option 3")}
            />
            <Label htmlFor="Option 3">Option 3</Label>
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="chips"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Which chips do you use</FormLabel>
      <FormControl>
        <div className="flex flex-col gap-5">
          
          <div className="flex items-center space-x-2" key="lays">
            <Checkbox
              id="lays"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "lays"]
                  : currentValue.filter((value) => value !== "lays");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("lays")}
            />
            <Label htmlFor="lays">lays</Label>
          </div>

          <div className="flex items-center space-x-2" key="balaji">
            <Checkbox
              id="balaji"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "balaji"]
                  : currentValue.filter((value) => value !== "balaji");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("balaji")}
            />
            <Label htmlFor="balaji">balaji</Label>
          </div>

          <div className="flex items-center space-x-2" key="panjabi tadka">
            <Checkbox
              id="panjabi tadka"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "panjabi tadka"]
                  : currentValue.filter((value) => value !== "panjabi tadka");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("panjabi tadka")}
            />
            <Label htmlFor="panjabi tadka">panjabi tadka</Label>
          </div>

          <div className="flex items-center space-x-2" key="bhujia">
            <Checkbox
              id="bhujia"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "bhujia"]
                  : currentValue.filter((value) => value !== "bhujia");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("bhujia")}
            />
            <Label htmlFor="bhujia">bhujia</Label>
          </div>

          <div className="flex items-center space-x-2" key="nacho">
            <Checkbox
              id="nacho"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "nacho"]
                  : currentValue.filter((value) => value !== "nacho");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("nacho")}
            />
            <Label htmlFor="nacho">nacho</Label>
          </div>

          <div className="flex items-center space-x-2" key="uncle chips">
            <Checkbox
              id="uncle chips"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "uncle chips"]
                  : currentValue.filter((value) => value !== "uncle chips");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("uncle chips")}
            />
            <Label htmlFor="uncle chips">uncle chips</Label>
          </div>

          <div className="flex items-center space-x-2" key="pokemon">
            <Checkbox
              id="pokemon"
              onCheckedChange={(checked: boolean) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value
                  : [];
                const newValue: string[] = checked
                  ? [...currentValue, "pokemon"]
                  : currentValue.filter((value) => value !== "pokemon");
                field.onChange(newValue);
              }}
              checked={Array.isArray(field.value) && (field.value as string[]).includes("pokemon")}
            />
            <Label htmlFor="pokemon">pokemon</Label>
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="your_name"
  render={({ field }) => (
    <FormItem>
      <FormLabel>name</FormLabel>
      <FormControl>
        <Input placeholder="kya hai tera naaam" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="fal"
  render={({ field }) => (
    <FormItem>
      <FormLabel>tera dfulflf</FormLabel>
      <FormControl>
        <Select {...field} onValueChange={field.onChange} value={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="full konsa pasand hai" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kela">kela</SelectItem>
<SelectItem value="laila">laila</SelectItem>
<SelectItem value="mela">mela</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default MyForm;
