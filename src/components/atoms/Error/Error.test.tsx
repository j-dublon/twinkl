import { render } from "@testing-library/react";
import { Error } from "./Error";

describe("Component: Error", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<Error />);
    expect(component).toMatchSnapshot();
  });
});
