import baseUrl from "./baseUrl";
import makeHeaders from "./makeHeaders";

export const getUserById = async (token, userId) => {
  const response = await fetch(`${baseUrl}/users/${userId}`, {
    method: "GET",
    headers: makeHeaders(token),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    console.log(error);
    throw new Error(error.error);
  }
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: makeHeaders(),
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    console.log(error);
    throw new Error(error.error);
  }
};

export const registerUser = async (email, password, address, zip) => {
  const response = await fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: makeHeaders(),
    body: JSON.stringify({
      email,
      password,
      address,
      zip,
    }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    console.log(error);
    throw new Error(error.error);
  }
};

export const changePassword = async (token, passwordOld, passwordNew) => {
  const response = await fetch(`${baseUrl}/users/password`, {
    method: "PATCH",
    headers: makeHeaders(token),
    body: JSON.stringify({
      passwordOld,
      passwordNew,
    }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    console.log(error);
    throw new Error(error.error);
  }
};

export const changeAddress = async (token, address, zip) => {
  const response = await fetch(`${baseUrl}/users/address`, {
    method: "PATCH",
    headers: makeHeaders(token),
    body: JSON.stringify({
      address,
      zip,
    }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    console.log(error);
    throw new Error(error.error);
  }
};
