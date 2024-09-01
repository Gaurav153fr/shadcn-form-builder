import { Switch } from './ui/switch'
import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form'
import { ControllerRenderProps } from 'react-hook-form'

const Rswitch = ({e,field}:{e:fSwitch,field:ControllerRenderProps<{}, never>}) => {
  return (
    <FormItem>
                          <FormLabel>
                            {e.label}{" "}
                            <small className="text-muted-foreground">
                              ({e.name})
                            </small>
                          </FormLabel>
                          <FormControl>
                            <div
                              key={e.name}
                              className="flex items-center space-x-2"
                            >
                              <Switch
                                onCheckedChange={field.onChange}
                                defaultChecked={e.default}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>{e.desc}</FormDescription>
                          <FormMessage />
                        </FormItem>
  )
}

export default Rswitch