export const postReducer = (state = { content: "" }, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return {
        ...state,
        content: action.payload.content
      };
    default:
      return state;
  }
}
