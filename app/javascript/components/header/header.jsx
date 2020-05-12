import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function Header(props) {

    const [ header, setHeader ] = useState("Header 1")
    const [ statement, setStatement ] = useState("Statement 1");
    const [ path, setPath ] = useState("/");
    const [ link, setLink ] = useState("Memorial");
    const [ click, setClick ] = useState(true)

    useEffect(function() {
        if (props.location.pathname === "/") {
            setHeader("Header 1")
            setStatement("Statement 1")
            setPath("/memorial")
            setLink("Memorial")
        } else {
            setHeader("Header 2")
            setStatement("Statement 2")
            setPath("/")
            setLink("Register")
        }
    }, [click])

    return (
        <header>
            <div className="header-content">
                <h1 className="header-title">{header}</h1>
                <p>{statement}</p>
                <NavLink to={path} onClick={() => setClick(!click)}>{link}</NavLink>
            </div>
        </header>
    )
}