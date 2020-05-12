import { RECEIVE_REGISTRATION } from '../actions/register_actions';

const _nullUser = Object.freeze({
    id: null
});

const registerReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REGISTRATION:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default registerReducer;