import './index.css';
import { Link } from 'react-router-dom';
import navBar from '../NavBar';

const Graph = () => {
    return (
    //     <footer>
    //     <Link to='Calendar'>Calendar</Link>
    //     <Link to='Graph'>Graph</Link>
    //     <Link to='Dashboard'>Dashboard</Link>
    //     <Link to='News'>News</Link>
    //     <Link to='Settings'>Settings</Link>
    // </footer>



        <div className='graph'>
            <h2>Graph</h2>
            { navBar }
        </div>
    )
}

export default Graph