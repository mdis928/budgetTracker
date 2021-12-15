import './index.css';
import { Link } from 'react-router-dom';
import navBar from '../NavBar';

const Settings = () => {
    return (
            // <footer>
            //     <Link to='Calendar'>Calendar</Link>
            //     <Link to='Graph'>Graph</Link>
            //     <Link to='Dashboard'>Dashboard</Link>
            //     <Link to='News'>News</Link>
            //     <Link to='Settings'>Settings</Link>
            // </footer>















        <div className='settings'>
            <h2>Settings</h2>
            { navBar }
        </div>

    )

}
export default Settings