const initialState = {
  count: 5,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// state = {count:5}

export default counterReducer;
