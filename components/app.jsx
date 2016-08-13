import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';
import World from './world.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                &nbsp;
                <World/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
