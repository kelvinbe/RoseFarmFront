const initialState = {
  results: null,
  chartsData: null,
  auth: null,
  cart: null,
  token: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART":
      return { cart: action.data };
    case "GET_TOKEN":
      return { token: action.data };
    case "GET_PS5_GAMES":
      return { results: action.data };
    case "GET_XBOX_GAMES":
      return { results: action.data };
    case "GET_PC_GAMES":
      return { results: action.data };
    case "GET_CHARTS_DATA":
      return { chartsData: action.data}
    case "GET_USER_AUTH":
        localStorage.setItem('profile', JSON.stringify({ ...action?.data.result}))
        console.log('actionsss', action?.data)
      return {auth: action.data}
    case "GET_ORDER_BY_DATE":
      return { results: action.data };
    default:
      return state;
  }
};

export default rootReducer;
