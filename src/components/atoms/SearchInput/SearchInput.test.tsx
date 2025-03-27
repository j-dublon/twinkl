import { fireEvent, render } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import { mockOnChange, mockProps } from "./fixtures";

describe("Component: SearchInput", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<SearchInput {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD call onChange function WHEN user types into the input", () => {
    const mockQuery = "Something";
    const { getByPlaceholderText } = render(<SearchInput {...mockProps} />);

    fireEvent.change(getByPlaceholderText("Search..."), {
      target: { value: mockQuery },
    });
    expect(mockOnChange).toHaveBeenCalledWith(mockQuery);
  });
});
