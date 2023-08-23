import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './src/components/Section1';

const App = () => {
    return (
        <div>
            <Section1 />
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);