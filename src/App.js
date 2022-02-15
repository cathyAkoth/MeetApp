
import './App.css';
import Favorites from './pages/Favorites';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import { Route , Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';


function App() {
  return (
    
    <Layout>
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
    </Layout>
  );
}

export default App;
