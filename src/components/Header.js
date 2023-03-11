import {Outlet, Link} from 'react-router-dom';
import {logoSVG} from '../images/index';

const Header = () => {
    return (
        <header>
            <Link to="/game-info" className="textLink">
                <h2>GAME INFO</h2>
            </Link>
            <Link to="/">
                <img src={logoSVG} alt="logo" />
            </Link>
            <Link to="/teams" className="textLink">
                <h2>TEAMS</h2>
            </Link>
            <Outlet />
        </header>
    );
};

export default Header;
