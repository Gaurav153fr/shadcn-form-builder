export const generateFormCode = (fields: dataType[]) => {
    let zodSchema = "const formSchema = z.object({\n";
    let formFields = "";
  
    fields.forEach((field) => {
      switch (field.kind) {
        case "input":
          zodSchema += `  ${field.name}: z.string().min(${field.min}),\n`;
          formFields += `
    <FormField
      control={form.control}
      name="${field.name}"
      render={({ field }) => (
        <FormItem>
          <FormLabel>${field.label}</FormLabel>
          <FormControl>
            <Input placeholder="${field.placeholder}" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />\n`;
          break;
        case "switch":
          zodSchema += `  ${field.name}: z.boolean().default(${field.default}),\n`;
          formFields += `
    <FormField
      control={form.control}
      name="${field.name}"
      render={({ field }) => (
        <FormItem>
          <FormLabel>${field.label}</FormLabel>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />\n`;
          break;
        case "select":
          zodSchema += `  ${field.name}: z.string(),\n`;
          formFields += `
    <FormField
      control={form.control}
      name="${field.name}"
      render={({ field }) => (
        <FormItem>
          <FormLabel>${field.label}</FormLabel>
          <FormControl>
            <Select {...field} onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="${field.placeholder}" />
              </SelectTrigger>
              <SelectContent>
                ${field.options
                  .map(
                    (option) =>
                      `<SelectItem value="${option}">${option}</SelectItem>`
                  )
                  .join("\n")}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />\n`;
          break;
        case "multiSelect":
          zodSchema += `  ${field.name}: z.string().array().min(${field.min}).max(${field.max}).default([]),\n`;
          formFields += `
    <FormField
      control={form.control}
      name="${field.name}"
      render={({ field }) => (
        <FormItem>
          <FormLabel>${field.label}</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-5">
              ${field.options
                .map(
                  (option) => `
              <div className="flex items-center space-x-2" key="${option}">
                <Checkbox
                  id="${option}"
                  onCheckedChange={(checked: boolean) => {
                    const currentValue = Array.isArray(field.value)
                      ? field.value
                      : [];
                    const newValue: string[] = checked
                      ? [...currentValue, "${option}"]
                      : currentValue.filter((value) => value !== "${option}");
                    field.onChange(newValue);
                  }}
                  checked={Array.isArray(field.value) && (field.value as string[]).includes("${option}")}
                />
                <Label htmlFor="${option}">${option}</Label>
              </div>`
                )
                .join("\n")}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />\n`;
          break;
        default:
          throw new Error(`Unsupported field kind`);
      }
    });
  
    zodSchema += "});\n";
  
    return `
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
    
    ${zodSchema}
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
            ${formFields}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      );
    };
    
    export default MyForm;
    `;
  };
  