
import './App.css';
import Favorites from './pages/Favorites';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
      <Route path = '/' exact>
        <AllMeetups />
      </Route>
      <Route path = '/NewMeetup'>
        <NewMeetup />
      </Route>
      <Route path = '/Favorites'>
        <Favorites />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
