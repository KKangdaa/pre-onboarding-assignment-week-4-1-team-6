import { instance } from './instance';

export const login = async (email, password) => {
  return await instance.post('/signin', {
    email: email,
    password: password,
  });
};

export const getUsers = async () => {
  return await instance.get(`/users`);
};

export const getUserData = async (params) => {
  return await instance.get(`/users/${params}`);
};

export const getAccounts = async () => {
  return await instance.get(`/accounts`);
};

export const getAccountData = async (params) => {
  return await instance.get(`/accounts${params}`);
};

export const getUserSetting = async () => {
  return await instance.get(`/userSetting`);
};

export const editUserName = async (id, name) => {
  return await instance.patch(`/users/${id}`, {
    name: name,
  });
};

export const deleteUser = async (id) => {
  return await instance.delete(`/users/${id}`);
};

export const createUsers = async (data) => {
  return await instance.post(`/users`, data);
};
