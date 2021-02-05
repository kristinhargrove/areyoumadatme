import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'

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
    <ThemeProvider theme = {theme}>
    <CssBaseline />
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
    </ThemeProvider>
    </Provider>
    </Router>
  );
}

export default App;
