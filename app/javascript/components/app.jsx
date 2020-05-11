import React from 'react';
import Memorial from './memorial/memorial'
import Header from './header/header'
import Register from './register/resister'
import Footer from './footer/footer'
import {
    Route,
    Switch,
} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Memorial path="/memorial"/>
                <Register path="/"/>
            </Switch>
            <Footer />
        </div>
    )
};

export default App;