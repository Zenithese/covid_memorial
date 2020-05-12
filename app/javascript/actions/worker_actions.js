import * as APIUtil from '../utils/worker_api_util';

export const RECEIVE_WORKERS = "RECEIVE_WORKERS"
export const RECEIVE_WORKER = "RECEIVE_WORKER"
export const CREATE_WORKER = "CREATE_WORKER"

const receiveAllWorkers = (workers) => {
    return {
        type: RECEIVE_WORKERS,
        workers,
    }
}

const receiveWorker = (worker) => {
    return {
        type: RECEIVE_WORKER,
        worker,
    }
}

const addWorker = (worker) => {
    return {
        type: CREATE_WORKER,
        worker,
    }
}

export const fetchWorkers = (filters) => dispatch => {
    return APIUtil.fetchWorkers(filters).then(workers => dispatch(receiveAllWorkers(workers)));
};

export const fetchWorker = (worker) => dispatch => {
    return APIUtil.fetchWorker(worker).then(worker => dispatch(receiveWorker(worker)));
};

export const createWorker = (worker) => dispatch => {
    return APIUtil.createWorker(worker).then(worker => {
        // dispatch(addWorker(worker))
        window.location.replace(`${window.location.origin}/#/memorial`)
    });
};