export const userReducer = (state = { firstname: "Evgeniy" }, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload.firstname
      };
    default:
      return state;
  }
}
