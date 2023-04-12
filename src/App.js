import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/features/missions/missionsSlice';
import Rockets from './components/Rockets';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
