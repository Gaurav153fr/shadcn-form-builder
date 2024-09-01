import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form';
import { ControllerRenderProps } from 'react-hook-form';

const RmultiSelect = ({e,field}:{e:fMultiSelect,field:ControllerRenderProps<{}, never>}) => {
  return (
    <FormItem>
                          <FormLabel>
                            {e.label}
                            <small className="text-muted-foreground">
                              ({e.name})
                            </small>
                          </FormLabel>

                          <FormControl>
                            <div className="flex flex-col gap-5">
                              {e.options.map((option) => (
                                <div
                                  className="flex items-center space-x-2"
                                  key={option}
                                >
                                  <Checkbox
                                    id={option}
                                    onCheckedChange={(checked: boolean) => {
                                      const currentValue = Array.isArray(
                                        field.value
                                      )
                                        ? field.value
                                        : [];
                                      const newValue: string[] = checked
                                        ? [...currentValue, option]
                                        : currentValue.filter(
                                            (value) => value !== option
                                          );
                                      field.onChange(newValue);
                                    }}
                                    checked={
                                      Array.isArray(field.value) &&
                                      (field.value as string[]).includes(option)
                                    }
                                  />
                                  <Label htmlFor={option}>{option}</Label>
                                </div>
                              ))}
                            </div>
                          </FormControl>

                          <FormDescription>{e.desc}</FormDescription>

                          <FormMessage />
                        </FormItem>
  )
}

export default RmultiSelect