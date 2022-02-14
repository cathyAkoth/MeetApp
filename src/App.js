
import './App.css';
import Favorites from './pages/Favorites';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import { Route , Switch} from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
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
