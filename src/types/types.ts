export type ActiveRole = {
  roleName: string;
  lastActiveDate: string;
  id: string;
};

export type APIRole = {
  id: number;
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string;
  status: "Active" | "In Active";
  users: string[];
  totalUser: number;
};

export type Role = Omit<APIRole, "totalUser"> & { userCount: number };
