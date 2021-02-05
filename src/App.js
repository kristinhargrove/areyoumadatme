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
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Header /> 
      <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/quiz'>
            <Question />
          </Route>
          <Route>
            <Results path='/results' />
          </Route>
          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
    </Provider>
    </Router>
  );
}

export default App;
