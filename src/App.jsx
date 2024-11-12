// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeelTheMusicLayout from './assets/components/pages/FeelTheMusic/FeelTheMusicLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeelTheMusicLayout />} />
        {/*<Route path="/discover" element={<DiscoverNewMusicLayout />} />
        <Route path="/join" element={<JoinTheFunLayout />} />*/}
      </Routes>
    </Router>
  );
};

export default App;
