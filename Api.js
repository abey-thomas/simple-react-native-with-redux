export const login = async (email, password) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (response.ok) {
    return {token:'fakeToken'};
  } else {
    throw new Error("invalid combination");
  }
};
