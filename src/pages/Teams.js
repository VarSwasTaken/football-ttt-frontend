import {Header, Footer} from '../components/index';
import {Outlet, Link} from 'react-router-dom';

const Teams = () => {
    return (
        <div class="container">
            <Header />
            <section className="content">
                <div className="textSection">
                    <h3>Leagues</h3>
                    <span>All clubs from the following leagues are currently available in the game:</span>
                    <ul>
                        <i>
                            <li>Premier League (ENG-1)</li>
                            <li>LaLiga (ESP-1)</li>
                            <li>Bundesliga (DEU-1)</li>
                            <li>Serie A (ITA-1)</li>
                            <li>Ligue 1 (FRA-1)</li>
                            <li>Campeonato Brasileiro Série A (BRA-1)</li>
                            <li>Major League Soccer (USA-1)</li>
                            <li>Championshup (ENG-2)</li>
                        </i>
                    </ul>
                </div>
                <div className="textSection">
                    <h3>Other Teams</h3>
                    <span>There are also other teams available in the game that don't come from the chosen leagues:</span>
                    <ul>
                        <i>
                            <li>Ajax Amsterdam (NLD-1)</li>
                            <li>AS Saint-Étienne (FRA-2)</li>
                            <li>AZ Alkmaar (NLD-1)</li>
                            <li>Besiktas JK (TUR-1)</li>
                            <li>BSC Young Boys (CHE-1)</li>
                            <li>CA Boca Juniors (ARG-1)</li>
                            <li>CA River Plate (ARG-1)</li>
                            <li>Celtic FC (SCT-1)</li>
                            <li>Club Brugge KV (BEL-1)</li>
                            <li>CSKA Moscow (RUS-1)</li>
                            <li>Dynamo Kyiv (UKR-1)</li>
                            <li>FC Basel 1893 (CHE-1)</li>
                            <li>FC Girondins Bordeaux (FRA-2)</li>
                            <li>FC Porto (PRT-1)</li>
                            <li>Fenerbahce (TUR-1)</li>
                            <li>Feyenoord Rotterdam (NLD-1)</li>
                            <li>Galatasaray (TUR-1)</li>
                            <li>Genoa CFC (ITA-2)</li>
                            <li>GNK Dinamo Zagreb (HRV-1)</li>
                            <li>Granada CF (ESP-2)</li>
                            <li>Hamburger SV (DEU-2)</li>
                            <li>KAA Gent (BEL-1)</li>
                            <li>KRC Genk (BEL-1)</li>
                            <li>Levante UD (ESP-2)</li>
                            <li>Málaga CF (ESP-2)</li>
                            <li>Olympiacos Piraeus (GRC-1)</li>
                            <li>Parma Calcio 1913 (ITA-2)</li>
                            <li>PSV Eindhoven (NLD-1)</li>
                            <li>Rangers FC (SCT-1)</li>
                            <li>Red Bull Salzburg (AUT-1)</li>
                            <li>RSC Anderlecht (BEL-1)</li>
                            <li>SC Braga (PRT-1)</li>
                            <li>Shakhtar Donetsk (UKR-1)</li>
                            <li>SL Benfica (PRT-1)</li>
                            <li>Sporting CP (PRT-1)</li>
                            <li>Twente Enschede FC (NLD-1)</li>
                            <li>Zenit St. Petersburg (RUS-1)</li>
                        </i>
                    </ul>
                </div>
                <div className="textSection">
                    <h3>Top Teams</h3>
                    <span>
                        The list of <b>top teams</b>, reffered to in <Link to="/game-info">Game Info</Link>, consists of:
                    </span>
                    <ul>
                        <li>Premier League (ENG-1):</li>
                        <ul>
                            <i>
                                <li>Arsenal FC</li>
                                <li>Chelsea FC</li>
                                <li>Leicester City</li>
                                <li>Liverpool FC</li>
                                <li>Manchester City</li>
                                <li>Manchester United</li>
                                <li>Newcastle United</li>
                                <li>Tottenham Hotspur</li>
                                <li>West Ham United</li>
                            </i>
                        </ul>{' '}
                        <br />
                        <li>LaLiga (ESP-1):</li>
                        <ul>
                            <i>
                                <li>Athletic Bilbao</li>
                                <li>Atlético de Madrid</li>
                                <li>FC Barcelona</li>
                                <li>Real Betis Balompié</li>
                                <li>Real Madrid</li>
                                <li>Real Sociedad</li>
                                <li>Sevilla FC</li>
                                <li>Valencia CF</li>
                                <li>Villareal CF</li>
                            </i>
                        </ul>{' '}
                        <br />
                        <li>Bundesliga (DEU-1):</li>
                        <ul>
                            <i>
                                <li>Bayer 04 Leverkusen</li>
                                <li>Bayern Munich</li>
                                <li>Borussia Dortmund</li>
                                <li>Borussia Mönchengladbach</li>
                                <li>Eintracht Frankfurt</li>
                                <li>RB Leipzig</li>
                                <li>VfL Wolfsburg</li>
                            </i>
                        </ul>{' '}
                        <br />
                        <li>Serie A (ITA-1):</li>
                        <ul>
                            <i>
                                <li>ACF Fiorentina</li>
                                <li>AC Milan</li>
                                <li>AS Roma</li>
                                <li>Atalanta BC</li>
                                <li>Inter Milan</li>
                                <li>Juventus FC</li>
                                <li>SSC Napoli</li>
                                <li>SS Lazio</li>
                            </i>
                        </ul>{' '}
                        <br />
                        <li>Ligue 1 (FRA-1):</li>
                        <ul>
                            <i>
                                <li>AS Monaco</li>
                                <li>LOSC Lille</li>
                                <li>Olympique Lyon</li>
                                <li>Olympique Marseille</li>
                                <li>Paris Saint-Germain</li>
                                <li>Stade Rennais FC</li>
                            </i>
                        </ul>{' '}
                        <br />
                        <li>Other leagues:</li>
                        <ul>
                            <i>
                                <li>Ajax Amsterdam (NLD-1)</li>
                                <li>Club Brugge KV (BEL-1)</li>
                                <li>FC Basel 1893 (CHE-1)</li>
                                <li>FC Porto (PRT-1)</li>
                                <li>Feyenoord Rotterdam (NLD-1)</li>
                                <li>PSV Eindhoven (NLD-1)</li>
                                <li>SL Benfica (PRT-1)</li>
                                <li>Sporting CP (PRT-1)</li>
                            </i>
                        </ul>
                    </ul>
                </div>
            </section>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Teams;
