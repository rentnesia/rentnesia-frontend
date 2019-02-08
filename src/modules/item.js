import {
  createItem,
  deleteItem,
  listItemByUser,
  listItem,
  listItemById
} from "../providers/item";
import { message } from "antd";
// import { resolve } from 'url';

const LIST = "@item/LIST";
const LIST_SUCCESS = "@item/LIST_SUCCESS";
const LIST_ERROR = "@item/LIST_ERROR";

const CREATE = "@item/CREATE";
const CREATE_SUCCESS = "@item/CREATE_SUCCESS";
const CREATE_ERROR = "@item/CREATE_ERROR";

const DELETE = "@item/DELETE";
const DELETE_SUCCESS = "@item/DELETE_SUCCESS";
const DELETE_ERROR = "@item/DELETE_ERROR";

const DETAIL = "@item/DETAIL";
const DETAIL_SUCCESS = "@item/DETAIL_SUCCESS";
const DETAIL_ERROR = "@item/DETAIL_ERROR";

const SET_FORM = "@item/SET_FORM";

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
      userId: null,
      name: "",
      description: "",
      label: "",
      price_per_day: "",
      status: "",
      picture: "",
      product_type_id: null
    },
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
          form: {
            ...state.create.form,
            [action.payload.name]: action.payload.value
          }
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
        delete: {
          ...state.delete,
          pending: false
        }
      };
    case DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          pending: true,
          error: false
        }
      };
    case DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          pending: false,
          data: action.payload.data
        }
      };
    case DETAIL_ERROR:
      return {
        ...state,
        detail: {
          ...state.detail,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    default:
      return state;
  }
}

export const listItems = (
  sort = "ASC",
  not_user = "",
  category = "",
  product_type = "",
  search = ""
) => dispatch => {
  dispatch({ type: LIST });
  listItem(sort, not_user, category, product_type, search)
    .then(data => {
      let total = data.item.length;
      dispatch({ type: LIST_SUCCESS, payload: { data: data.item, total } });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      dispatch({ type: LIST_ERROR, payload: msg });
    });
};

export const listItemByUsers = userId => dispatch => {
  dispatch({ type: LIST });
  listItemByUser(userId)
    .then(data => {
      let total = data.item.length;
      dispatch({ type: LIST_SUCCESS, payload: { data: data.item, total } });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      dispatch({ type: LIST_ERROR, payload: msg });
    });
};

export const getItemById = id => dispatch => {
  dispatch({ type: DETAIL });
  listItemById(id)
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

export const createItems = form => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    createItem(form)
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
export const deleteItems = ({ id }) => dispatch => {
  dispatch({ type: DELETE });
  return new Promise((resolve, reject) => {
    deleteItem({ id })
      .then(result => {
        dispatch({ type: DELETE_SUCCESS });
        return resolve(result);
      })
      .catch(err => {
        dispatch({
          type: DELETE_ERROR,
          payload:
            "Tidak Dapat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti"
        });
        return reject(err);
      });
  });
};

export const setForm = (name, value) => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: {
      name,
      value
    }
  });
};
