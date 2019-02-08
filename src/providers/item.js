import axios from "axios";

import { HOST } from "../config";

export const createItem = ({
  userId,
  name,
  description,
  label,
  price_per_day,
  status,
  picture,
  product_type_id
}) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/v1/users/${userId}/item`, {
        name,
        description,
        label,
        price_per_day,
        status,
        picture,
        product_type_id
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const deleteItem = id =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${HOST}/api/v1/item/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listItemByUser = ({ userId }) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/users/${userId}/item`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listItemById = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/item/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listItem = (
  sort = "ASC",
  category = "",
  product_type = "",
  search = ""
) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `${HOST}/api/v1/item?sort=${sort}&category=${category}&product_type=${product_type}&search=${search}`
      )
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
