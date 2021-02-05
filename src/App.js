import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Question from './containers/Question'
import OutputContainer from './containers/OutputContainer';
import Results from './containers/Results';

import { Provider } from 'react-redux';
import { store } from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Provider store={store}>
        <Header />
        <Main />
        <Question />
        <OutputContainer />
        <Results />
    </Provider>
    </Router>
  );
}

export default App;
