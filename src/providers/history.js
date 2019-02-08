import axios from "axios";

import { HOST } from "../config";

export const createHistory = ({
  startDate,
  endDate,
  location,
  status,
  renter_id,
  item_id
}) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/api/v1/history`, {
        startDate,
        endDate,
        location,
        status,
        renter_id,
        item_id
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const updateHistory = (id, data) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${HOST}/api/history/${id}`, data)
      .then(res => resolve(res.data))
      .catch(err => reject(err.data));
  });

export const listHistoryById = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/history/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listHistory = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/history`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listHistoryByUserId = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/api/v1/users/${id}/history`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
