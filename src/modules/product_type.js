import { listProductById } from "../providers/category";
import {
  createProductType,
  deleteProductType,
  listProductType
} from "../providers/product_type";
import { message } from "antd";
// import { resolve } from 'url';

const LIST = "@product_type/LIST";
const LIST_SUCCESS = "@product_type/LIST_SUCCESS";
const LIST_ERROR = "@product_type/LIST_ERROR";

const CREATE = "@product_type/CREATE";
const CREATE_SUCCESS = "@product_type/CREATE_SUCCESS";
const CREATE_ERROR = "@product_type/CREATE_ERROR";

const DELETE = "@product_type/DELETE";
const DELETE_SUCCESS = "@product_type/DELETE_SUCCESS";
const DELETE_ERROR = "@product_type/DELETE_ERROR";

const SET_FORM = "@product_type/SET_FORM";

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
      name: "",
      category_id: null
    },
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
    default:
      return state;
  }
}

export const listProductTypes = () => dispatch => {
  dispatch({ type: LIST });
  listProductType()
    .then(data => {
      let total = data.product_type.length;
      dispatch({
        type: LIST_SUCCESS,
        payload: { data: data.product_type, total }
      });
    })
    .catch(err => {
      let msg =
        "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      dispatch({ type: LIST_ERROR, payload: msg });
    });
};

export const listProductsById = id => dispatch => {
  dispatch({ type: LIST });
  listProductById(id)
    .then(data => {
      let total = data.data.length;
      dispatch({
        type: LIST_SUCCESS,
        payload: { data: data.data, total }
      });
    })
    .catch(err => {
      // let msg =
      //   "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
      dispatch({ type: LIST_ERROR, payload: err });
    });
};

export const createProductTypes = form => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    createProductType(form)
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
export const deleteProductTypes = ({ id }) => dispatch => {
  dispatch({ type: DELETE });
  return new Promise((resolve, reject) => {
    deleteProductType({ id })
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
