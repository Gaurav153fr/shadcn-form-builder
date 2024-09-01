interface fInput {
    kind: "input";
    name: string;
    label: string;
    desc:string,
    placeholder: string;
    type: "text" | "number" | "email";
    min: number|null,
    max:number|null,
  }
  
  // Define the type for toggle fields
  interface fSwitch {
    kind: "switch";
    name: string;
    label: string;
    desc:string,
    default: boolean;
  }
  
  interface fSelect {
    kind: "select";
    name: string;
    placeholder: string;
    desc:string
    label: string;
    options: string[];
  }
  interface fMultiSelect {
    kind: "multiSelect";
    name: string;
    desc:string
    label: string;
    options: string[];
    min:number,
    max:number,
  }
  // Union type for all field types
  type dataType = fInput | fSwitch| fSelect|fMultiSelect;
  