import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

let render = function(){
    ReactDOM.render(<App />, rootElement);
};

if(module.hot){
    module.hot.accept(App, function(){
        setTimeout(render);
    });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
