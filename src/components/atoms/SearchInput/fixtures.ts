import { SearchInputProps } from "@/types";
import { Mock } from "vitest";

export const mockOnChange: Mock = vi.fn();

export const mockProps: SearchInputProps = {
  value: "",
  onChange: mockOnChange,
};
