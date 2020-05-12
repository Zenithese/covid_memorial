import { RECEIVE_WORKERS, RECEIVE_WORKER } from '../actions/worker_actions';

const workersReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKERS:
            return action.workers
        case RECEIVE_WORKER:
            return Object.assign([], state, { [action.worker.id]: action.worker });
        default:
            return state;
    }
};

export default workersReducer;