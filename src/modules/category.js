import {
  createCategory,
  listCategory,
  deleteCategory
} from "../providers/category";
import { message } from "antd";
// import { resolve } from 'url';

const LIST = "@category/LIST";
const LIST_SUCCESS = "@category/LIST_SUCCESS";
const LIST_ERROR = "@category/LIST_ERROR";

const CREATE = "@category/CREATE";
const CREATE_SUCCESS = "@category/CREATE_SUCCESS";
const CREATE_ERROR = "@category/CREATE_ERROR";

const DELETE = "@category/DELETE";
const DELETE_SUCCESS = "@category/DELETE_SUCCESS";
const DELETE_ERROR = "@category/DELETE_ERROR";

const SET_FORM = "@category/SET_FORM";

const initialState = {
  list: {
    data: [],
    total: 0,
    pending: false,
    error: false,
    errorMessage: ""
  },
  create: {
    name: "",
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
        delete: {
          ...state.delete,
          pending: false
        }
      };
    default:
      return state;
  }
}

export const listCategories = () => dispatch => {
  dispatch({ type: LIST });
  listCategory()
    .then(data => {
      let total = data.category.length;
      dispatch({ type: LIST_SUCCESS, payload: { data: data.category, total } });
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

export const createCategories = name => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    createCategory(name)
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
export const deleteCategories = ({ id }) => dispatch => {
  dispatch({ type: DELETE });
  return new Promise((resolve, reject) => {
    deleteCategory({ id })
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
