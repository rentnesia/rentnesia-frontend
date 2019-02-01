import axios from "axios";

import { HOST } from "../config";
// export const login = (username, password) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${HOST}/api/user/login`, {
//         username,
//         password,
//       })
//       .then(res => {
//         if (res.data.success) {
//           sessionStorage.setItem('jwtToken', res.data.userinfo);
//         }
//         return resolve(res.data);
//       })
//       .catch(error => reject(error.response));
//   });

// export const createUser = ({ username, password, level }) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${HOST}/api/user/create`, {
//         username,
//         password,
//         level,
//       })
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.response));
//   });

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
