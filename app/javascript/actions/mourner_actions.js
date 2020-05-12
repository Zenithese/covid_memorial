import * as APIUtil from '../utils/mourner_api_util';

export const CREATE_MOURNER = "CREATE_MOURNER"

const addMourner = (mourner) => {
    return {
        type: CREATE_MOURNER,
        mourner,
    }
}

export const createMourner = (mourner) => dispatch => {
    return APIUtil.createMourner(mourner).then(mourner => {
        // dispatch(addMourner(mourner))
        // window.location.replace(`${window.location.origin}/#/memorial`)
    });
};