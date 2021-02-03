import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Question from './components/Question';
import ResultsPage from './components/ResultsPage';

import { Provider } from 'react-redux';
import { store } from './store';



function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <Question />
        <ResultsPage />
      </Provider>
    </>
  );
}

export default App;
