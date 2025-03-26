import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Component: Loading", () => {
  it("SHOULD match snapshot", () => {
    const component = render(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
