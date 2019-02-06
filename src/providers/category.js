import axios from "axios";

import { HOST } from "../config";

export const createCategory = ({ name }) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/v1/category`, {
        name
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const deleteCategory = ({ id }) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${HOST}/api/v1/category/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listCategory = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/category`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listProductById = ({ id }) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/category/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
