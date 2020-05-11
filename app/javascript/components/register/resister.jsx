import React from 'react';

export default function register() {
    return (
        <div>
            <h1>Submit:</h1>
            <form>
                <div style={{display: "flex"}}>
                    <div>
                        <h2>About You:</h2>
                        <label>
                            Your Name:
                            <br />
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Are you in a union? If so, which one
                            <br />
                            <select id="unions" name="unions">
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
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            What is your job title
                            <br />
                            <input type="text" name="name" />
                        </label>
                    </div>

                    <div>
                        <h2>Person who passed away:</h2>
                        <label htmlFor="myfile">
                            Their Picture:
                            <br />
                            <input type="file" id="myfile" name="myfile" />
                        </label>
                        <br />
                        <label>
                            Their Name:
                            <br />
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Name of their employer
                            <br />
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Job Title
                            <br />
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Union Representing
                            <br />
                            <select id="unions" name="unions">
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
                            <textarea type="textbox" name="name" />
                        </label>
                    </div>
                </div>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}