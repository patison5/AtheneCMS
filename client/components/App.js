import React, { Fragment  } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Users from './users'
import UserDetails from './UserDetails'
import Navigation from './layout/Navigation'

import '../css/style.css';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="wraper">
                    <Navigation />

                    <Switch>
                        <Route path="/" component={UserDetails} exact />
                        <Route path="/users" component={Users} exact />
                        <Route path="/users/:id" component={UserDetails} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App
