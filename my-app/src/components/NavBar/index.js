import './index.css';
import { Link } from 'react-router-dom';

const navBar =
        <nav>
            <Link to='GeneralLedger'>General Ledger</Link>
            {/* <Link to='Graph'>Main</Link> */}
            <Link to='Dashboard'>Me</Link>
            <Link to='News'>Habits and Goals</Link>
            <Link to='Settings'>Settings</Link>
        </nav>
;

export default navBar; 