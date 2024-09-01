import { Input } from "./ui/input";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { ControllerRenderProps } from "react-hook-form";

const Rinput = ({e,formField}:{e:fInput,formField:ControllerRenderProps<{}, never>}) => {
  return (
    <FormItem>
          <FormLabel>
            {e.label}{" "}
            <small className="text-muted-foreground">({e.name})</small>
          </FormLabel>
          <FormControl>
            <Input placeholder={e.placeholder} type={e.type} {...formField} />
          </FormControl>
          <FormDescription>{e.desc}</FormDescription>
          <FormMessage />
        </FormItem>
  );
};

export default Rinput;
