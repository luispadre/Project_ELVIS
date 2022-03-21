import ReactDOM from 'react-dom';
import React from 'react';
import App from './Contexts';
function Index() {
    return (<React.Fragment>
        <App />
    </React.Fragment>);
}

const app = document.getElementById("root");
if (app) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
