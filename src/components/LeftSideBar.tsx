import { TextIcon, ChevronDownCircle, ToggleLeftIcon, BoxIcon, ListTodo } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'

const LeftSideBar = ({setTab}: {setTab: Dispatch<SetStateAction<string>>}) => {
  return (
    <div className="flex w-1/5 gap-4 h-screen  dark:bg-slate-900/50 ">
        <div className="flex w-full flex-col gap-4 rounded-lg  p-4">
          <h2 className="text-xl font-semibold">Add Fields</h2>
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setTab("input")}
            >
              <TextIcon className="mr-2 h-5 w-5" />
              Text Input
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setTab("select")}
            >
              <ChevronDownCircle className="mr-2 h-5 w-5" />
              Dropdown/Select
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setTab("switch")}
            >
              <ToggleLeftIcon className="mr-2 h-5 w-5" />
              Switch
            </Button>
          
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => setTab("multiSelect")}
            >
              <ListTodo className="mr-2 h-5 w-5" />
              Multi Select
            </Button>
          </div>
        </div>
      </div>
  )
}

export default LeftSideBar