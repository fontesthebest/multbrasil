import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './screens/home/home';
import Works from './screens/view/works';
import Login from './screens/login/login';

function Rotas() {
   return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/view' element={<Works/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
   )
}

export default Rotas;
