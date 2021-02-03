import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Question from './containers/Question'
import OutputContainer from './containers/OutputContainer';

import { Provider } from 'react-redux';
import { store } from './store';



function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <Question />
        <OutputContainer />
      </Provider>
    </>
  );
}

export default App;
