import axios from "axios";

import { HOST } from "../config";
export const login = (email, password) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/v1/auth/login`, {
        email,
        password
      })
      .then(res => {
        if (res.data.token) {
          sessionStorage.setItem("jwtToken", res.data.token);
        }
        return resolve(res.data);
      })
      .catch(error => reject(error.response));
  });

export const createUser = ({
  user_type,
  first_name,
  last_name,
  username,
  email,
  password
}) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/v1/auth/signup`, {
        user_type,
        first_name,
        last_name,
        username,
        email,
        password
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

// export const deleteUser = ({ id }) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${HOST}/api/user/${id}`)
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.response));
//   });

// export const resetPassword = ({ id }) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${HOST}/api/user/reset/${id}`)
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.response));
//   });

// export const listUsers = ({ page, limit, search }) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${HOST}/api/users`, {
//         params: {
//           page,
//           limit,
//           search,
//         },
//       })
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.response));
//   });
