import { FC } from "react";
import { SearchInputProps } from "@/types";

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      placeholder="Search..."
      onChange={onChange}
      value={value}
      type="search"
    />
  );
};
