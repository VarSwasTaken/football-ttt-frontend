import {Outlet, Link} from 'react-router-dom';
import {Header, Footer} from '../components/index';

const GameInfo = () => {
    return (
        <div class="container">
            <Header />
            <section className="content">
                <div className="textSection">
                    <h3>About Game</h3>
                    <span>
                        <b>Football Tic Tac Toe</b> is a two-player offline club-guessing minigame based on the iconic{' '}
                        <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank" rel="noreferrer">
                            Tic-Tac-Toe
                        </a>{' '}
                        game (also called Noughts and Crosses).
                        <br />
                        The game combines tactical tic-tac-toe skills with football knowledge. At first, six football clubs are randomly drawn based on the user's filters. The clubs are then placed on the left side and top sides of the game board. To place an X or an O on the board, the players must first name a player that played for the two corresponding teams throughout their professional football career.
                    </span>
                </div>
                <div className="textSection">
                    <h3>How To Play</h3>
                    <span>
                        1. First, choose the <b>gamemode</b> you want to play. There are currently three gamemodes available: <br />
                        <ul>
                            <li>clubs only - the game is based on finding players that played for two specific clubs in their career.</li>
                            <li>clubs/nations - the game is based on finding players from a certain nationality that played for a specific club in their career. </li>
                            <li>random - the game chooses randomly between the other two available gamemodes.</li>
                        </ul>
                        <br />
                        2. Choose the <b>clubs</b> that should be appearing in the game:
                        <ul>
                            <li>top 5 leagues - the game will consist of all 98 teams playing in the top five leagues (Premier League, LaLiga, Bundesliga, Serie A, Ligue 1).</li>
                            <li>default - the game will consist of top clubs, selected by our team of professionals, in order to bring users the best experience possible. This is the recommended option.</li>
                            <li>custom - the game will consist of clubs chosen by the user.</li>
                        </ul>
                        More info on teams in <Link to="/data-usage">Game Data</Link>. <br /> <br />
                        3. Click the <b>Start Game</b> button to start playing.
                    </span>
                </div>
            </section>
            <Outlet />
            <Footer />
        </div>
    );
};

export default GameInfo;
