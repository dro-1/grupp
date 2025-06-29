import { useEffect, useState } from "react";
import { getRoles } from "@/services/api";
import { APIRole, Role } from "@/types/types";

function normalizeUsers(users: string[], userCount: number): string[] {
  if (users.length === userCount) return users;
  if (users.length > userCount) return users.slice(0, userCount);
  // Duplicate users to reach userCount
  const result = [...users];
  let i = 0;
  while (result.length < userCount) {
    result.push(users[i % users.length]);
    i++;
  }
  return result;
}

export const useRoles = (page: number = 1) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getRoles();
        const mapped = (data ?? []).map((role: APIRole) => {
          const userCount = role.totalUser;
          const users = normalizeUsers(role.users, userCount);
          const { totalUser, ...rest } = role;
          return { ...rest, userCount, users };
        });
        setRoles(mapped);
      } catch (err) {
        console.log(err);
        setError("Something went wrong. Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchRoles();
  }, []);

  const start = (page - 1) * 10;
  return { roles: roles.slice(start, start + 10), loading, error };
};
