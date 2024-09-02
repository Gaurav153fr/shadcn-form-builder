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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  userName: z.string().min(2),
  is_Adult: z.boolean().default(false),
  langUsed: z.string().array().min(2).max(4).default([]),
  favFruit: z.string(),
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full m-auto gap-5 my-10"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name :</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="is_Adult"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Are you over the age of 18</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="langUsed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which languages do you use ? </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center space-x-2" key="Rust">
                    <Checkbox
                      id="Rust"
                      onCheckedChange={(checked: boolean) => {
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const newValue: string[] = checked
                          ? [...currentValue, "Rust"]
                          : currentValue.filter((value) => value !== "Rust");
                        field.onChange(newValue);
                      }}
                      checked={
                        Array.isArray(field.value) &&
                        (field.value as string[]).includes("Rust")
                      }
                    />
                    <Label htmlFor="Rust">Rust</Label>
                  </div>

                  <div className="flex items-center space-x-2" key="java">
                    <Checkbox
                      id="java"
                      onCheckedChange={(checked: boolean) => {
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const newValue: string[] = checked
                          ? [...currentValue, "java"]
                          : currentValue.filter((value) => value !== "java");
                        field.onChange(newValue);
                      }}
                      checked={
                        Array.isArray(field.value) &&
                        (field.value as string[]).includes("java")
                      }
                    />
                    <Label htmlFor="java">java</Label>
                  </div>

                  <div className="flex items-center space-x-2" key="python">
                    <Checkbox
                      id="python"
                      onCheckedChange={(checked: boolean) => {
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const newValue: string[] = checked
                          ? [...currentValue, "python"]
                          : currentValue.filter((value) => value !== "python");
                        field.onChange(newValue);
                      }}
                      checked={
                        Array.isArray(field.value) &&
                        (field.value as string[]).includes("python")
                      }
                    />
                    <Label htmlFor="python">python</Label>
                  </div>

                  <div className="flex items-center space-x-2" key="C++">
                    <Checkbox
                      id="C++"
                      onCheckedChange={(checked: boolean) => {
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const newValue: string[] = checked
                          ? [...currentValue, "C++"]
                          : currentValue.filter((value) => value !== "C++");
                        field.onChange(newValue);
                      }}
                      checked={
                        Array.isArray(field.value) &&
                        (field.value as string[]).includes("C++")
                      }
                    />
                    <Label htmlFor="C++">C++</Label>
                  </div>

                  <div className="flex items-center space-x-2" key="Javascript">
                    <Checkbox
                      id="Javascript"
                      onCheckedChange={(checked: boolean) => {
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const newValue: string[] = checked
                          ? [...currentValue, "Javascript"]
                          : currentValue.filter(
                              (value) => value !== "Javascript"
                            );
                        field.onChange(newValue);
                      }}
                      checked={
                        Array.isArray(field.value) &&
                        (field.value as string[]).includes("Javascript")
                      }
                    />
                    <Label htmlFor="Javascript">Javascript</Label>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="favFruit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>which is your fav fruit</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select one of following" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Banana ">Banana </SelectItem>
                    <SelectItem value="Grapes">Grapes</SelectItem>
                    <SelectItem value="i don't know">i don't know</SelectItem>
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
