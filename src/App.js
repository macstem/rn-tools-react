export const BASE_URL = process.env.REACT_APP_BASE_URL;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import About from './pages/about'
import Home from './pages/home'
import News from './pages/news'
import NewsItem from './pages/NewsItem'
import Login from './pages/login'
import Encyclopedia from './pages/encyclopedia'
import EncyclopediaItem from "./pages/EncyclopediaItem";
import CompareTrains from "./pages/CompareTrains";

import i18n from "i18next";
import { withNamespaces } from 'react-i18next';

const App = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
      <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col my-3">
                        <Link to="/">home</Link> |{" "}
                        <Link to="/about">about</Link> |{" "}
                        <Link to="/login">login</Link> |{" "}
                        <Link to="/encyclopedia">encyclopedia</Link> |{" "}
                        <Link to="/pociagi-towarowe">ciuf ciuf</Link> |{" "}
                        <Link to="/news/">news</Link>
                    </div>
                </div>
                <div className="row">
                    <button onClick={() => changeLanguage('pl')}>pl</button>
                    <button onClick={() => changeLanguage('en')}>en</button>
                </div>
                <div className="row">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/:id" element={<NewsItem />} />
                        <Route path="/login" element={<Login />} /> 
                        <Route path="/encyclopedia" element={<Encyclopedia />} /> 
                        <Route path="/encyclopedia/:id" element={<EncyclopediaItem />} /> 
                        <Route path="/pociagi-towarowe" element={<CompareTrains prop="cargo" />} /> 
                    </Routes>
                </div>
            </div>
      </React.Fragment>
    );
}

export default App;