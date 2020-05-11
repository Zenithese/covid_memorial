import React from 'react';

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            {true ? <p>Statement 1</p> : <p>Statement 2</p>}
        </header>
    )
}