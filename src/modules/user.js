import { createUser, listUserById } from "../providers/user";
import { message } from "antd";
// import { resolve } from 'url';

const LIST = "@user/LIST";
const LIST_SUCCESS = "@user/LIST_SUCCESS";
const LIST_ERROR = "@user/LIST_ERROR";

const CREATE = "@user/CREATE";
const CREATE_SUCCESS = "@user/CREATE_SUCCESS";
const CREATE_ERROR = "@user/CREATE_ERROR";

const RESET = "@user/RESET";
const RESET_SUCCESS = "@user/RESET_SUCCESS";
const RESET_ERROR = "@user/RESET_ERROR";

const DELETE = "@user/DELETE";
const DELETE_SUCCESS = "@user/DELETE_SUCCESS";
const DELETE_ERROR = "@user/DELETE_ERROR";

const DETAIL = "@user/DETAIL";
const DETAIL_SUCCESS = "@user/DETAIL_SUCCESS";
const DETAIL_ERROR = "@user/DETAIL_ERROR";

const SET_FORM = "@user/SET_FORM";

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
      user_type: "customer",
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    pending: false,
    error: false,
    errorMessage: ""
  },
  reset: {
    pending: false,
    error: false,
    errorMessage: ""
  },
  detail: {
    data: {},
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
    case RESET:
      return {
        ...state,
        reset: {
          ...state.reset,
          pending: true,
          error: false
        }
      };
    case RESET_ERROR:
      return {
        ...state,
        reset: {
          ...state.reset,
          pending: false,
          error: true,
          errorMessage: action.payload
        }
      };
    case RESET_SUCCESS:
      return {
        ...state,
        reset: {
          ...state.reset,
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

export const getUserById = id => dispatch => {
  dispatch({ type: DETAIL });
  listUserById(id)
    .then(data => {
      dispatch({ type: DETAIL_SUCCESS, payload: { data } });
    })
    .catch(err => {
      dispatch({ type: DETAIL_ERROR, payload: err });
    });
};

export const createUsers = form => dispatch => {
  dispatch({ type: CREATE });
  return new Promise((resolve, reject) => {
    createUser(form)
      .then(result => {
        dispatch({ type: CREATE_SUCCESS });
        message.success("Berhasil Sukses");
        return resolve(result);
        // let msg =
        //   "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
        // if (result.message) {
        //   msg = result.message;
        //   if (msg.isArray()) {
        //     msg = msg[0].toString();
        //   }
        // }
        // dispatch({ type: CREATE_ERROR, payload: err });
        // message.error(err);
        // return reject(result);
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

// export const resetUserPassword = ({ id }) => dispatch => {
//   dispatch({ type: RESET });
//   return new Promise((resolve, reject) => {
//     resetPassword({ id })
//       .then(result => {
//         if (result.success) {
//           dispatch({ type: RESET_SUCCESS });
//           return resolve(result);
//         }
//         let msg =
//           "Tidak Dapat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//         if (result.message) {
//           msg = result.message;
//           if (msg.isArray()) {
//             msg = msg[0].toString();
//           }
//         }
//         dispatch({ type: RESET_ERROR, payload: msg });
//         return reject(result);
//       })
//       .catch(err => {
//         const msg =
//           "Tidak Dapat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//         dispatch({ type: RESET_ERROR, payload: msg });
//         return reject(err);
//       });
//   });
// };

// export const deleteUsers = ({ id }) => dispatch => {
//   dispatch({ type: DELETE });
//   return new Promise((resolve, reject) => {
//     deleteUser({ id })
//       .then(result => {
//         if (result.success) {
//           dispatch({ type: DELETE_SUCCESS });
//           return resolve(result);
//         }
//         let msg =
//           "Tidak Dapat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//         if (result.message) {
//           msg = result.message;
//           if (msg.isArray()) {
//             msg = msg[0].toString();
//           }
//         }
//         dispatch({ type: DELETE_ERROR, payload: msg });
//         return reject(result);
//       })
//       .catch(err => {
//         dispatch({
//           type: DELETE_ERROR,
//           payload:
//             "Tidak Dapat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti"
//         });
//         return reject(err);
//       });
//   });
// };

export const setForm = (name, value) => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: {
      name,
      value
    }
  });
};
