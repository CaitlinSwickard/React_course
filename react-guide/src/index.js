import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// this is reading the div of root from the index.html public file
// App is what renders to the browser. It is a component.
ReactDOM.render(<App />, document.getElementById('root'));
