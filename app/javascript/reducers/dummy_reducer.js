

const dummyReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case "RECEIVE_CURRENT_USER":
            return Object.assign({}, state, {});
        default:
            return state;
    }
};

export default dummyReducer;