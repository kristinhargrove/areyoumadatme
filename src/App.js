import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import WelcomePage from './components/WelcomePage';
import Question from './containers/Question'
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
    <CssBaseline />
      <Header /> 
      <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path = '/about'>
            <About />
          </Route>
          <Route path = '/welcomepage/:username/:sendername'>
            <WelcomePage />
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
