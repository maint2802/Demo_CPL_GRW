import instance from "./instance";
export async function postLogin() {
  const data = {
    user: {
      email: "mai111@gmail.com",
      password: "123456",
    },
  };

  const res = await instance.post("users/login", data);
  return res;
}

// endpoint

export async function getAuthUser() {
  const res = await instance.get("/user");
  return res.data.user;
}
