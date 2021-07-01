import { Route, Switch, NavLink } from 'react-router-dom';
import FuncCompOne from './components/FuncCompOne';
import Away from './components/Away';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button>
          <NavLink to='/'>Mount</NavLink>
        </button>
        <button>
          <NavLink to='/away'>Unmount</NavLink>
        </button>
      </div>
      <Switch>
        <Route exact path='/'>
          <FuncCompOne />
        </Route>
        <Route path='/away'>
          <Away />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
