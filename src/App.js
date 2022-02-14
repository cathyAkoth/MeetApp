
import './App.css';
import Favorites from './pages/Favorites';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path = '/'>
        <AllMeetups />
      </Route>
      <Route path = '/NewMeetup'>
        <NewMeetup />
      </Route>
      <Route path = '/Favorites'>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
