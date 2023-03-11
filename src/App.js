import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Game, GameInfo, Home, NotFound, Teams} from './pages/index';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="game-info" element={<GameInfo />} />
                <Route path="teams" element={<Teams />} />
                <Route path="game" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
