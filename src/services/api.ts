const url = "https://gamma-api.vercel.app/api/roles";

export const getRoles = async () => {
  try {
    const res = await fetch(url);
    const roles = await res.json();
    return roles;
  } catch (e) {
    console.log(e);
  }
};
