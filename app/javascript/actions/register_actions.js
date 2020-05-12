import * as APIUtil from '../utils/register_api_util';

export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const RECEIVE_REGISTER_ERRORS = 'RECEIVE_REGISTER_ERRORS';

export const receiveRegistration = data => {
    return ({
        type: RECEIVE_REGISTRATION,
        data
    })
};

export const receiveErrors = errors => ({
    type: RECEIVE_REGISTER_ERRORS,
    errors
});

export const register = data => dispatch => {
    return (
        APIUtil.register(data).then(data => (
            dispatch(receiveRegistration(data))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    )
};