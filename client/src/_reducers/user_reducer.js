import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_SUCCESS_BUY_USER,
  GET_WISHLIST_ITEMS_USER,
  ADD_TO_WISHLIST_USER,
  DELETE_WISHLIST_USER
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case ADD_TO_CART_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload,
        },
      };
    case GET_CART_ITEMS_USER:
      return {
        ...state,
        cartDetail: action.payload,
      };
    case REMOVE_CART_ITEM_USER:
      return {
        ...state,
        cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData,
          cart: action.payload.cart,
        },
      };
    case ON_SUCCESS_BUY_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload.cart,
        },
        cartDetail: action.payload.cartDetail,
      };

    case GET_WISHLIST_ITEMS_USER:
      return {
        ...state,
        wishlistDetail: action.payload,
      };

    case ADD_TO_WISHLIST_USER:
      return { ...state, userData: {
        ...state.userData,
        wishlist: action.payload,
      },};

    case DELETE_WISHLIST_USER:
      return { ...state, userData: {
        ...state.userData,
        wishlist: action.payload,
      },};

    default:
      return state;
  }
}
