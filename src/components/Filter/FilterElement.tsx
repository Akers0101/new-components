import React ,{memo} from 'react'
import { FormItemProps } from "antd";
import { SkipToken } from "@reduxjs/toolkit/dist/query";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import dayjs from "dayjs";
export enum Hierarchy {
  SuperAdmin = 1,
  House = 2,
  MasterAgent = 3,
  Agent = 4,
}
export type PresetType = {
  lang?: string;
  label?: React.ReactNode;
  value: dayjs.Dayjs[];
  key?: string | number;
};
export interface FilterElementOptions extends FormItemProps {
  type:
    | "text"
    | "number"
    | "min-max"
    | "datetime-range"
    | "multi-select"
    | "select"
    | "dynamic-multi-select"
    | "dynamic-select"
    | "month-range"
    | "dynamic-search"
    | "dynamic-multi-search";
  label: string;
  isAdv?: boolean;
  options?: any;
  required?: boolean;
  requiredMessage?: string;
  visible?: boolean | undefined;
  presets?: PresetType[];
  params?: any;
  searchBy?: string;
  sortBy?: string;
  skipToken?: SkipToken;
  setData?: (data: any) => any;
  setTotal?: (data: any) => any;
  useQuery?: UseQuery<any>;
  hierarchyId?: Hierarchy;
  category?: string | string[];
  actions?: string | string[];
}
const FilterElement = () => {
  return (
    <div>FilterElement</div>
  )
}

export default memo(FilterElement)