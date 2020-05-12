import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createWorker } from '../../actions/worker_actions'
import { register } from '../../actions/register_actions'

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => {
            dispatch(register(data))
            // dispatch()
        },
    };
};

function Register(props) {

    const [workerFirstName, setWorkerFirstName] = useState("");
    const [workerLastName, setWorkerLastName] = useState("");
    const [workerUnion, setWorkerUnion] = useState("");
    const [workerEmployer, setWorkerEmployer] = useState("");
    const [workerJobTitle, setWorkerJobTitle] = useState("");
    const [message, setMessage] = useState("");

    const [mournerFirstName, setMournerFirstName] = useState("");
    const [mournerLastName, setMournerLastName] = useState("");
    const [mournerUnion, setMournerUnion] = useState("");
    const [mournerEmployer, setMournerEmployer] = useState("");
    const [mournerJobTitle, setMournerJobTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const worker = {
            first_name: workerFirstName,
            last_name: workerLastName,
            union: workerUnion,
            employer: workerEmployer,
            job_title: workerJobTitle,
            message
        }
        const mourner = {
            first_name: mournerFirstName,
            last_name: mournerLastName,
            union: mournerUnion,
            employer: mournerEmployer,
            job_title: mournerJobTitle,
        }
        const form = {
            worker,
            mourner,
        }
        props.processForm(form)
        // props.processForm(mourner)
    }

    return (
        <div className="registration">
            <h1>Submit:</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-fields">
                    <div className="register-left">
                        <div className="register-inner">
                            <h2>About You:</h2>
                            <label>
                                Your Name:
                                <br />
                                <div className="register-name-fields">
                                    <div>
                                        <input type="text" name="first_name" value={mournerFirstName} onChange={(e) => setMournerFirstName(e.target.value)} />
                                        <label className="register-name-labels" for="first_name">First Name</label>
                                    </div>
                                    <div>
                                        <input type="text" name="last_name" value={mournerLastName} onChange={(e) => setMournerLastName(e.target.value)} />
                                        <label className="register-name-labels" for="last_name">Last Name</label>
                                    </div>
                                </div>
                            </label>
                            <br />
                            <label>
                                Are you in a union? If so, which one
                                <br />
                                <select id="unions" name="mournerUnions" value={mournerUnion} onChange={(e) => setMournerUnion(e.target.value)}>
                                    <option value="Teamsters">Teamsters</option>
                                    <option value="SEIU">SEIU</option>
                                    <option value="UNITE">UNITE</option>
                                    <option value="AFL-CIO">AFL-CIO</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                What is the name of your employer
                                <br />
                                <input type="text" name="mournerEmployer" value={mournerEmployer} onChange={(e) => setMournerEmployer(e.target.value)}/>
                            </label>
                            <br />
                            <label>
                                What is your job title
                                <br />
                                <input type="text" name="jobTitle" value={mournerJobTitle} onChange={(e) => setMournerJobTitle(e.target.value)}/>
                            </label>
                        </div>
                    </div>

                    <div className="register-right">
                        <div className="register-inner">
                            <h2>Person who passed away:</h2>
                            <label htmlFor="photo">
                                Their Picture:
                                <br />
                                <div class="upload-btn-wrapper">
                                    {/* <label className="register-upload-button" for="photo">Upload Picture</label> */}
                                    <input className="register-photo-input" type="file" id="photo" name="photo" />
                                </div>
                            </label>
                            <br />
                            <label>
                                Their Name:
                                <br />
                                <div className="register-name-fields">
                                    <div>
                                        <input type="text" name="first_name" value={workerFirstName} onChange={(e) => setWorkerFirstName(e.target.value)}/>
                                        <label className="register-name-labels" for="first_name">First Name</label>
                                    </div>
                                    <div>
                                        <input type="text" name="last_name" value={workerLastName} onChange={(e) => setWorkerLastName(e.target.value)}/>
                                        <label className="register-name-labels" for="last_name">Last Name</label>
                                    </div>
                                </div>
                            </label>
                            {/* <br /> */}
                            <label>
                                Name of their employer
                                <br />
                                <input type="text" name="workerEmployer" value={workerEmployer} onChange={(e) => setWorkerEmployer(e.target.value)} />
                            </label>
                            <br />
                            <label>
                                Job Title
                                <br />
                                <input type="text" name="workerJobTitle" value={workerJobTitle} onChange={(e) => setWorkerJobTitle(e.target.value)}/>
                            </label>
                            <br />
                            <label>
                                Union Representing
                                <br />
                                <select id="unions" name="workerUnions" value={workerUnion} onChange={(e) => setWorkerUnion(e.target.value)}>
                                    <option value="Teamsters">Teamsters</option>
                                    <option value="SEIU">SEIU</option>
                                    <option value="UNITE">UNITE</option>
                                    <option value="AFL-CIO">AFL-CIO</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Honor them here
                                <br />
                                <textarea type="textbox" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
                <input className="register-submit-button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Register)