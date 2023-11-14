import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'
import Home from "./pages/home.jsx";
import Movies from './pages/Movies.jsx';
import Search from './pages/search.jsx';



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BroserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Movie />} />
        <Route path='search' element={<Search />} />
      </Route>
    </Routes>
    </BroserRouter>
  </React.StrictMode>,
)
