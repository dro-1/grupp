import { ActiveRoleCard } from "@/components/active-role-card";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Active Role Card", () => {
  it("renders correctly", () => {
    const tree = render(
      <ActiveRoleCard
        activeRole={{
          id: "001",
          lastActiveDate: "06/2023",
          roleName: "Superadmin",
        }}
        selected={false}
        onClick={() => {}}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("changes background color when selected", async () => {
    const user = userEvent.setup();
    const handleClick = () => {
      rerender(
        <ActiveRoleCard
          activeRole={{
            id: "001",
            lastActiveDate: "06/2023",
            roleName: "Superadmin",
          }}
          selected={true}
          onClick={handleClick}
        />
      );
    };
    const { getByTestId, rerender } = render(
      <ActiveRoleCard
        activeRole={{
          id: "001",
          lastActiveDate: "06/2023",
          roleName: "Superadmin",
        }}
        selected={false}
        onClick={handleClick}
      />
    );
    const card = getByTestId("active-role-card-001");
    expect(card.className).not.toContain("border-primary-300 bg-primary-50");
    await user.click(card);
    expect(card.className).toContain("border-primary-300 bg-primary-50");
  });

  it("changes background color when unselected", async () => {
    const user = userEvent.setup();
    const handleClick = () => {
      rerender(
        <ActiveRoleCard
          activeRole={{
            id: "001",
            lastActiveDate: "06/2023",
            roleName: "Superadmin",
          }}
          selected={false}
          onClick={handleClick}
        />
      );
    };
    const { getByTestId, rerender } = render(
      <ActiveRoleCard
        activeRole={{
          id: "001",
          lastActiveDate: "06/2023",
          roleName: "Superadmin",
        }}
        selected={true}
        onClick={handleClick}
      />
    );
    const card = getByTestId("active-role-card-001");
    expect(card.className).toContain("border-primary-300 bg-primary-50");
    await user.click(card);
    expect(card.className).not.toContain("border-primary-300 bg-primary-50");
  });

  it("changes text color when selected", async () => {
    const user = userEvent.setup();
    const activeRole = {
      id: "001",
      lastActiveDate: "06/2023",
      roleName: "Superadmin",
    };
    const handleClick = () => {
      rerender(
        <ActiveRoleCard
          activeRole={activeRole}
          selected={true}
          onClick={handleClick}
        />
      );
    };
    const { getByTestId, rerender, getByText } = render(
      <ActiveRoleCard
        activeRole={activeRole}
        selected={false}
        onClick={handleClick}
      />
    );
    const card = getByTestId("active-role-card-001");
    const roleName = getByText("Superadmin");
    const lastActiveDate = getByText(
      "Last active " + activeRole.lastActiveDate
    );
    const setDefault = getByText("Set as default");
    expect(roleName).not.toHaveClass("text-primary-800");
    expect(lastActiveDate).not.toHaveClass("text-primary-600");
    expect(setDefault).not.toHaveClass("text-primary-500");
    await user.click(card);
    expect(roleName).toHaveClass("text-primary-800");
    expect(lastActiveDate).toHaveClass("text-primary-600");
    expect(setDefault).toHaveClass("text-primary-500");
  });
  it("changes checkmark background when selected", async () => {
    const user = userEvent.setup();
    const activeRole = {
      id: "001",
      lastActiveDate: "06/2023",
      roleName: "Superadmin",
    };
    const handleClick = () => {
      rerender(
        <ActiveRoleCard
          activeRole={activeRole}
          selected={true}
          onClick={handleClick}
        />
      );
    };
    const { getByTestId, rerender } = render(
      <ActiveRoleCard
        activeRole={activeRole}
        selected={false}
        onClick={handleClick}
      />
    );
    const card = getByTestId("active-role-card-001");
    const checkmarkContainer = getByTestId("checkmark-container");
    expect(checkmarkContainer.className).not.toContain(
      "bg-primary-600 border-primary-600"
    );
    await user.click(card);
    expect(checkmarkContainer.className).toContain(
      "bg-primary-600 border-primary-600"
    );
  });
});
