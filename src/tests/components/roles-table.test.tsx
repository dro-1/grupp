import { RolesTable } from "@/components/roles-table";
import { Role } from "@/types/types";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const roles: Role[] = [
  {
    id: 26,
    name: "Deputy sales personnel 26",
    type: "CUSTOM",
    date: "Feb 1, 2023",
    status: "In Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/50866431?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
    ],
    userCount: 3,
  },
  {
    id: 28,
    name: "sales personnel 26",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: ["https://avatars.githubusercontent.com/u/20971850?v=4"],
    userCount: 1,
  },
];
describe("Roles Table", () => {
  it("renders correctly", () => {
    const tree = render(<RolesTable roles={roles} />);
    expect(tree).toMatchSnapshot();
  });

  it("row is selected when the checkbox is clicked", async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<RolesTable roles={roles} />);
    const checkbox = getByTestId("checkbox-0");
    const checkboxImg = getByTestId("checkbox-img-0");

    expect(checkbox.className).not.toContain(
      "border-primary-600 bg-primary-50"
    );
    expect(checkboxImg).not.toHaveClass("block");
    await user.click(checkbox);
    expect(checkbox.className).toContain("border-primary-600 bg-primary-50");
    expect(checkboxImg).toHaveClass("block");
  });

  it("row is unselected when the checkbox is clicked (if it was previously checked)", async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<RolesTable roles={roles} />);
    const checkbox = getByTestId("checkbox-0");
    const checkboxImg = getByTestId("checkbox-img-0");

    await user.click(checkbox);
    await user.click(checkbox);
    expect(checkbox.className).not.toContain(
      "border-primary-600 bg-primary-50"
    );
    expect(checkboxImg).not.toHaveClass("block");
  });
});
