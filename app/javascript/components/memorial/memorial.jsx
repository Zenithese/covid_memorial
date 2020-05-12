import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../actions/worker_actions';

const mapStateToProps = (state) => {
    return {
        // workers: state.entities.workers,
        workers: Object.values(state.entities.workers),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkers: () => dispatch(fetchWorkers()),
    };
};

function Memorial(props) {

    useEffect(() => {
        props.fetchWorkers();
    }, []);

    return (
        <ul>
            {props.workers ? 
                props.workers.map((worker, i) => (
                    <li key={`worker-${i}`}>
                        <div className="card">
                            <h2>{worker.first_name} {worker.last_name}</h2>
                            <br/>
                            <p>{worker.message}</p>
                        </div>
                    </li>
                )) 
                :
                null
            }
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Memorial);