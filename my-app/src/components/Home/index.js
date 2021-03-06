import './index.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='main-container'>
            <div className="welcome">
                <h2>Welcome</h2>
            </div>
            <main className="card">
                <form>
                    <div className="email">
                        <input placeholder='E-mail'></input>
                        <i className='fas fa-user-alt email-icon' aria-hidden='true'></i>
                    </div>
                    <div className="password">
                        <input placeholder='Password'></input>
                        <i class="fas fa-lock password-icon" aria-hidden='true'></i>
                    </div>

                    <button type='submit' className='submit-btn'>
                        Sign in
                        <Link to='/dashboard'>
                            Sign in
                        </Link>
                    </button>
                </form>
                <div className="register">
                    <p>
                        New around here? 
                        <Link to='/register'>Sign Up!</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};
 
export default Home;
 