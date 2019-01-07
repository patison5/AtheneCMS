import React, { Fragment  } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Users from './users'

import '../css/style.css';

class App extends React.Component {
    render () {
        return (
            <div>
                <Users /> 
            </div>
        );
    }

}

export default App
