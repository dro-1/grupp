import { ActiveRole, Role } from "@/types/types";
import user1 from "@/assets/images/user-1.png";
import user2 from "@/assets/images/user-2.png";
import user3 from "@/assets/images/user-3.png";
import user4 from "@/assets/images/user-4.png";
import user5 from "@/assets/images/user-5.png";

export const activeRoles: ActiveRole[] = [
  {
    id: "001",
    lastActiveDate: "06/2023",
    roleName: "Superadmin",
  },
  {
    id: "002",
    lastActiveDate: "01/2023",
    roleName: "Developeradmin",
  },
  {
    id: "003",
    lastActiveDate: "10/2022",
    roleName: "Supportadmin",
  },
];

export const roles: Role[] = [
  {
    name: "Superadmin",
    date: "Jan 1, 2023",
    type: "DEFAULT",
    status: "ACTIVE",
    users: [user1, user2, user3, user4, user5, user1, user2],
  },
  {
    name: "Merchantadmin",
    date: "Feb 1, 2023",
    type: "DEFAULT",
    status: "ACTIVE",
    users: [user1, user2, user3, user4, user5, user1],
  },
  {
    name: "Supportadmin",
    date: "Feb 1, 2023",
    type: "DEFAULT",
    status: "ACTIVE",
    users: [user1, user2, user3, user4, user5],
  },
  {
    name: "Sales personnel",
    date: "Mar 1, 2023",
    type: "CUSTOM",
    status: "ACTIVE",
    users: [user1, user2, user3],
  },
  {
    name: "Deputy sales personnel",
    date: "Apr 1, 2023",
    type: "CUSTOM",
    status: "INACTIVE",
    users: [user1, user2, user3, user4],
  },
  {
    name: "Developeradmin",
    date: "May 1, 2023",
    type: "SYSTEM-CUSTOM",
    status: "ACTIVE",
    users: [user1, user2, user3, user4],
  },
  {
    name: "Developer-basic",
    date: "Jun 1, 2023",
    type: "SYSTEM-CUSTOM",
    status: "ACTIVE",
    users: [user1, user2, user3],
  },
];
