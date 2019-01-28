// import { listUsers, createUser, deleteUser, resetPassword } from '../providers/user';
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

const initialState = {
  list: {
    data: [],
    total: 0,
    pending: false,
    error: false,
    errorMessage: ""
  },
  create: {
    pending: false,
    error: false,
    errorMessage: ""
  },
  reset: {
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
    default:
      return state;
  }
}

// export const listUser = ({ page, limit, search }) => dispatch => {
//   dispatch({ type: LIST });
//   listUsers({ page, limit, search })
//     .then(({ data, total }) => {
//       dispatch({ type: LIST_SUCCESS, payload: { data, total } });
//     })
//     .catch(err => {
//       let msg =
//         "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//       if (err && err != null) {
//         msg = err.data.message;
//         if (msg.isArray()) {
//           msg = msg[0].toString();
//         }
//       }
//       dispatch({ type: LIST_ERROR, payload: msg });
//     });
// };

// export const createUsers = ({ username, password, level }) => dispatch => {
//   dispatch({ type: CREATE });
//   return new Promise((resolve, reject) => {
//     createUser({ username, password, level })
//       .then(result => {
//         if (result.success) {
//           dispatch({ type: CREATE_SUCCESS });
//           return resolve(result);
//         }
//         let msg =
//           "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//         if (result.message) {
//           msg = result.message;
//           if (msg.isArray()) {
//             msg = msg[0].toString();
//           }
//         }
//         dispatch({ type: CREATE_ERROR, payload: msg });
//         return reject(result);
//       })
//       .catch(err => {
//         const msg =
//           "Terjadi Kesalahan Saat Melakukan Koneksi dengan Server, Mohon Coba Lagi Nanti";
//         dispatch({ type: CREATE_ERROR, payload: msg });
//         return reject(err);
//       });
//   });
// };

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
