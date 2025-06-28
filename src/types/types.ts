export type ActiveRole = {
  roleName: string;
  lastActiveDate: string;
  id: string;
};

export type Role = {
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string;
  status: "ACTIVE" | "INACTIVE";
  users: string[];
};
