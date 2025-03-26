import { FC } from "react";
import { SearchInputProps } from "@/types";

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      placeholder="Search..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      value={value}
      type="search"
    />
  );
};
