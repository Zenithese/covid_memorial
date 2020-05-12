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
        <div className="memorial">
            {props.workers ? 
                props.workers.map((worker, i) => (
                    <div className="card" key={`worker-${i}`}>
                        <div className="card-top">
                            <img src={'https://seedie.s3.amazonaws.com/comp_vii.jpg'} />
                            <div className="card-top-left">
                                <p>{worker.union}</p>
                                <h4 className="worker-title">{worker.first_name} {worker.last_name}</h4>
                                <p>{worker.job_title}</p>
                                <p>{worker.employer}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="container">
                            <br/>
                            <p>{worker.message}</p>
                        </div>
                    </div>
                )) 
                :
                null
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Memorial);