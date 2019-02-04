import axios from "axios";
import { message } from "antd";
import { login } from "../providers/user";

export const TRY_LOGIN = "@root/TRY_LOGIN";
export const SUCCESS_LOGIN = "@root/SUCCESS_LOGIN";
export const FAIL_LOGIN = "@root/FAIL_LOGIN";
export const LOGOUT = "@root/LOGOUT";
export const SET_FORM = "@login/SET_FORM";
export const ALREADY_LOGIN = "@login/ALREADY";

const initialState = {
  login: false,
  loading: false,
  error: null,
  name: "",
  form: {
    email: "",
    password: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        login: false,
        loading: true,
        error: null
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        login: true,
        error: null,
        name: action.payload
      };
    case FAIL_LOGIN:
      return {
        ...state,
        loading: false,
        login: false,
        error: action.payload
      };
    case SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value
        }
      };
    case ALREADY_LOGIN:
      return {
        ...state,
        login: true,
        name: action.payload.name
      };
    case LOGOUT:
      return {
        ...initialState,
        login: false
      };
    default:
      return state;
  }
}

export const alreadyLogged = () => dispatch => {
  const token = sessionStorage.getItem("bearerToken");
  const split = token.split(" ");
  const parse = btoa(split[1]);

  console.dir(parse);

  dispatch({ type: ALREADY_LOGIN, payload: {} });
};

export const tryLogin = props => dispatch => {
  const { form } = props.state.login;
  dispatch({
    type: TRY_LOGIN
  });

  login(form.email, form.password)
    .then(result => {
      dispatch({
        type: SUCCESS_LOGIN,
        payload: result.name
      });

      sessionStorage.setItem("bearerToken", result.token);
      sessionStorage.setItem("userInfoDecrypted", JSON.stringify(result.name));

      axios.defaults.headers = {
        Authorization: `bearer ${sessionStorage.getItem("bearerToken")}`
      };

      message.success("Berhasil Masuk");
      props.loginSuccess();
    })
    .catch(error => {
      message.error("Terjadi Kesalahan");
      if (error && error.data) {
        return dispatch({ type: FAIL_LOGIN, payload: error.data.error });
      }

      dispatch({
        type: FAIL_LOGIN,
        payload: "Terjadi Kesalahan Internal pada Server, Mohon Coba Lagi Nanti"
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

export const errorMessage = msg => dispatch => {
  dispatch({
    type: FAIL_LOGIN,
    payload: msg
  });
  message.error("Terjadi Kesalahan");
};

export const logout = () => dispatch => {
  sessionStorage.removeItem("bearerToken");
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("userInfoDecrypted");
  dispatch({
    type: LOGOUT
  });
};
