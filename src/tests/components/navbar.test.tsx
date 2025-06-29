import { Navbar } from "@/components/navbar";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });

  it("opens sidebar when hamburger menu is clicked on mobile", async () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));
    const user = userEvent.setup();
    const { getByTestId } = render(<Navbar />);
    const hamburgerBtn = getByTestId("hamburger");
    const sidebar = getByTestId("sidebar");
    expect(sidebar).toHaveClass("-translate-x-full");
    await user.click(hamburgerBtn);
    expect(sidebar).toHaveClass("translate-x-0");
  });
});
