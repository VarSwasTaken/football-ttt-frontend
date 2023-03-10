import {Outlet, Link} from 'react-router-dom';
import {logoSVG} from '../images/index';

const Header = () => {
    return (
        <header>
            <Link to="/game-guide" className="textLink">
                <h2>GAME GUIDE</h2>
            </Link>
            <Link to="/">
                <img src={logoSVG} alt="logo" />
            </Link>
            <Link to="/data-usage" className="textLink">
                <h2>DATA USAGE</h2>
            </Link>
            <Outlet />
        </header>
    );
};

export default Header;
