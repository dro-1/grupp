import { InputBox } from "@/components/input-box";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mail from "@/assets/icons/mail.svg";

describe("Input Box", () => {
  it("renders correctly", () => {
    const tree = render(
      <InputBox iconSrc={mail} placeholder="billing@example.com" />
    );
    expect(tree).toMatchSnapshot();
  });

  it("is focused when input is clicked", async () => {
    const user = userEvent.setup();
    const { getByPlaceholderText } = render(
      <InputBox iconSrc={mail} placeholder="billing@example.com" />
    );
    const input = getByPlaceholderText("billing@example.com");

    // Focus the input
    await user.click(input);

    expect(input).toHaveFocus();
  });
});
