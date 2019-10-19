import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './App';
import _10Jokes from './components/10Jokes';

const history = createBrowserHistory();

ReactDOM.render( 
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' componemt={App} ></Route>
            <Route path='/10jokes' component={_10Jokes} ></Route> 
        </Switch>
    </Router>, 
document.getElementById("root"));

// ! understand Promises

// new Promise(resolve => {
//     setTimeout(() => {
//         console.log('I understand'); 
//         resolve();
//     }, 2000)
// })
// .then(() => {
//     console.log(' JavaScript :' );
//     console.log(' promises :' );
// });


