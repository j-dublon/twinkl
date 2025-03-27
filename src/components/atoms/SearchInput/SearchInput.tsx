import { FC } from "react";
import { SearchInputProps } from "@/types";

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="bg-zinc-100 py-2 sm:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
      <input
        placeholder="Search..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        value={value}
        type="search"
        className="block m-auto bg-white sm:bg-zinc-100 p-2 rounded-sm w-90/100 sm:w-40/100 lg:w-30/100"
      />
    </div>
  );
};
