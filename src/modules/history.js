import {
  createHistory,
  listHistory,
  updateHistory,
  listHistoryById,
  listHistoryByUserId
} from "../providers/history";
import { message } from "antd";
// import { resolve } from 'url';

const LIST = "@history/LIST";
const LIST_SUCCESS = "@history/LIST_SUCCESS";
const LIST_ERROR = "@history/LIST_ERROR";

const CREATE = "@history/CREATE";
const CREATE_SUCCESS = "@history/CREATE_SUCCESS";
const CREATE_ERROR = "@history/CREATE_ERROR";

const DELETE = "@history/DELETE";
const DELETE_SUCCESS = "@history/DELETE_SUCCESS";
const DELETE_ERROR = "@history/DELETE_ERROR";

const UPDATE = "@history/UPDATE";
const UPDATE_SUCCESS = "@history/UPDATE_SUCCESS";
const UPDATE_ERROR = "@history/UPDATE_ERROR";

const DETAIL = "@history/DETAIL";
const DETAIL_SUCCESS = "@history/DETAIL_SUCCESS";
const DETAIL_ERROR = "@history/DETAIL_ERROR";

const SET_FORM = "@history/SET_FORM";
const SET_UPDATE_FORM = "@history/SET_UPDATE_FORM";

const initialState = {
  list: {
    data: [],
    total: 0,
    pending: false,
    error: false,
    errorMessage: ""
  },
  create: {
    form: {
      startDate: null,
      endDate: null,
      location: "",
      status: "",
      item_id: null,
      renter_id: null
    },
    pending: false,
    error: false,
    errorMessage: ""
  },
  update: {
    status: "",
    pending: false,
    error: false,
    errorMessage: ""
  },
  detail: {
    data: [],
    pending: false,
    error: false,
    errorMessage: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        list: {
          ...state.list,
          pending: true,
          error: false
        }
      };
    case LIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          pending: false,
          data: action.payload.data,
          total: action.payload.total
        }
      };
    case LIST_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    case SET_FORM:
      return {
        ...state,
        create: {
          ...state.create,
          name: action.payload
        }
      };
    case CREATE:
      return {
        ...state,
        create: {
          ...state.create,
          pending: true,
          error: false
        }
      };
    case CREATE_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          pending: false
        }
      };
    case DELETE:
      return {
        ...state,
        delete: {
          ...state.delete,
          pending: true,
          error: false
        }
      };
    case DELETE_ERROR:
      return {
        ...state,
        delete: {
          ...state.delete,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        update: {
          ...state.delete,
          pending: false
        }
      };
    case UPDATE:
      return {
        ...state,
        update: {
          ...state.update,
          pending: true,
          error: false
        }
      };
    case UPDATE_ERROR:
      return {
        ...state,
        update: {
          ...state.update,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        update: {
          ...state.update,
          pending: false
        }
      };
    case SET_UPDATE_FORM:
      return {
        ...state,
        update: {
          ...state.update,
          status: action.payload
        }
      };
    case DETAIL:
      return {
        ...state,
        detail: {
          ...state.list,
          pending: true,
          error: false
        }
      };
    case DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.list,
          pending: false,
          data: action.payload.data
        }
      };
    case DETAIL_ERROR:
      return {
        ...state,
        detail: {
          ...state.list,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    default:
      return state;
  }
}

export const listHistories = () => dispatch => {
  dispatch({ type: LIST });
  listHistory()
    .then(data => {
      let total = data.history.length;
      dispatch({ type: LIST_SUCCESS, payload: { data: data.history, total } });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      if (err && err != null) {
        msg = err.data.message;
        if (msg.isArray()) {
          msg = msg[0].toString();
        }
      }
      dispatch({ type: LIST_ERROR, payload: msg });
    });
};

export const getHistoryById = id => dispatch => {
  dispatch({ type: DETAIL });
  listHistoryById(id)
    .then(data => {
      dispatch({ type: DETAIL_SUCCESS, payload: { data: data.item } });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      if (err && err != null) {
        msg = err;
        if (msg.isArray()) {
          msg = msg[0].toString();
        }
      }
      dispatch({ type: DETAIL_ERROR, payload: msg });
    });
};

export const listHistoriesByUserId = id => dispatch => {
  dispatch({ type: LIST });
  listHistoryByUserId(id)
    .then(data => {
      let total = data.history.length;
      dispatch({ type: LIST_SUCCESS, payload: { data: data.history, total } });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      if (err && err != null) {
        msg = err;
        if (msg.isArray()) {
          msg = msg[0].toString();
        }
      }
      dispatch({ type: LIST_ERROR, payload: msg });
    });
};

export const createHistories = form => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    createHistory(form)
      .then(result => {
        dispatch({ type: CREATE_SUCCESS });
        message.success("Berhasil Sukses");
        return resolve(result);
      })
      .catch(err => {
        const msg =
          "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
        dispatch({ type: CREATE_ERROR, payload: msg });
        message.error(msg);
        return reject(err);
      });
  });
};

export const updateHistories = (id, form) => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    updateHistory(id, form)
      .then(result => {
        dispatch({ type: CREATE_SUCCESS });
        message.success("Berhasil Memperbarui");
        return resolve(result);
      })
      .catch(err => {
        const msg =
          "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
        dispatch({ type: CREATE_ERROR, payload: msg });
        message.error(msg);
        return reject(err);
      });
  });
};

export const setForm = value => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: value
  });
};

export const setUpdateForm = value => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: value
  });
};
