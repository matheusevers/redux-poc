/* eslint-disable import/no-anonymous-default-export */
export default function (state = "", action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_USER_COUNTRY":
      const { payload } = action;

      if (payload === "es") {
        return { ...state, country: "\u{1F1EA}\u{1F1F8} \u{1F402}" };
      }

      if (payload === "pt") {
        return { ...state, country: "\u{1F1E7}\u{1F1F7} \u{26BD}" };
      }

      return { ...state, country: "\u{1F1EB}\u{1F1F7} \u{1F950}" };
    case "FINISH_APP_FLOW":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
