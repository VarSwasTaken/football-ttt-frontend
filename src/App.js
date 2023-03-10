import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {DataUsage, Game, GameGuide, Home, NotFound} from './pages/index';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="game-guide" element={<GameGuide />} />
                <Route path="data-usage" element={<DataUsage />} />
                <Route path="game" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
