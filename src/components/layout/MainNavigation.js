import { Link } from "react-router-dom";

function MainNavigation(){
    return(
        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/NewMeetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/Favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;