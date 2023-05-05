
import './App.css';
import './stylesheet/style.css'
import { Fragment } from 'react';
import MainRouter from './router/appRouter';

function App() {
  return (
    <Fragment>
      <div>
        <MainRouter />
      </div>
    </Fragment>
  );
}

export default App;
