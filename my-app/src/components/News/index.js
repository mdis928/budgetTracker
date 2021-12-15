import './index.css';
import { Link } from 'react-router-dom';
import navBar from '../NavBar';

const News = () => {
    return (
    //     <footer>
    //     <Link to='Calendar'>Calendar</Link>
    //     <Link to='Graph'>Graph</Link>
    //     <Link to='Dashboard'>Dashboard</Link>
    //     <Link to='News'>News</Link>
    //     <Link to='Settings'>Settings</Link>
    // </footer>



        <div className='news'>
            <h2>News</h2>
            { navBar }
        </div>

    )
}

export default News