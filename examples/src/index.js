import React from 'react';
import { render} from 'react-dom';
import WebTestList from '../../src/web_test_list.jsx';

const App = () => (
    <WebTestList />
);
render(<App />, document.getElementById("root"));