import { render } from "@testing-library/react";
import { EmptyList } from "./EmptyList";

describe("Component: EmptyList", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<EmptyList />);
    expect(component).toMatchSnapshot();
  });
});
