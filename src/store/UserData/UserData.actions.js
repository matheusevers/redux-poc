import axios from "axios";

export function setUsername(name) {
  return {
    type: "SET_USER",
    payload: name,
  };
}

export function setUserCountry(country) {
  return {
    type: "SET_USER_COUNTRY",
    payload: country,
  };
}

function finishAppFlow(res) {
  return {
    type: "FINISH_APP_FLOW",
    payload: res,
  };
}

export function asyncActionCreator() {
  return (dispatch, getState) => {
    const { userdata } = getState();

    return axios
      .get(`https://api.agify.io?name=${userdata.user}`)
      .then(({ data }) => dispatch(finishAppFlow(data)));
  };
}
