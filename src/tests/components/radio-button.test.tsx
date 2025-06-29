import { RadioButton } from "@/components/radio-button";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Radio Button", () => {
  it("renders correctly", () => {
    const tree = render(
      <div>
        <RadioButton id="hello" name="role" content={<em>Hello</em>} />
        <RadioButton id="world" name="role" content={<em>World</em>} />
      </div>
    );
    expect(tree).toMatchSnapshot();
  });

  it("radio button becomes selected when content is clicked", async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(
      <div>
        <RadioButton id="hello" name="role" content={<em>Hello</em>} />
        <RadioButton id="world" name="role" content={<em>World</em>} />
      </div>
    );
    const helloText = getByText("Hello");
    const helloInput = getByTestId("hello");
    const worldInput = getByTestId("world");
    expect(helloInput).not.toBeChecked();
    expect(worldInput).not.toBeChecked();
    await user.click(helloText);
    expect(helloInput).toBeChecked();
    expect(worldInput).not.toBeChecked();
  });

  it("radio buttons with the same name are not both active at once", async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(
      <div>
        <RadioButton id="hello" name="role" content={<em>Hello</em>} />
        <RadioButton id="world" name="role" content={<em>World</em>} />
      </div>
    );
    const helloText = getByText("Hello");
    const worldText = getByText("World");
    const helloInput = getByTestId("hello");
    const worldInput = getByTestId("world");
    expect(helloInput).not.toBeChecked();
    expect(worldInput).not.toBeChecked();
    await user.click(helloText);
    await user.click(worldText);
    expect(helloInput).not.toBeChecked();
    expect(worldInput).toBeChecked();
  });
});
