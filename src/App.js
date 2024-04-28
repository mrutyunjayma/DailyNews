import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          height={3}
          progress={loading}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/business"
            element={<News key="business" country="in" category="business" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/"
            element={<News key="general" country="in" category="general" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/general"
            element={<News key="general" country="in" category="general" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" country="in" category="health" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" country="in" category="science" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" country="in" category="technology" setLoading={setLoading} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" country="in" category="entertainment" setLoading={setLoading} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
