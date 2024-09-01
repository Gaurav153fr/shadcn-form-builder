import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { ControllerRenderProps } from "react-hook-form";

const Rselect = ({
  e,
  field,
}: {
  e: fSelect;
  field: ControllerRenderProps<{}, never>;
}) => {
  return (
    <FormItem>
      <FormLabel>
        {e.label} <small className="text-muted-foreground">({e.name})</small>
      </FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={e.placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {e.options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormDescription>{e.desc}</FormDescription>

      <FormMessage />
    </FormItem>
  );
};

export default Rselect;
