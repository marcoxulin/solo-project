import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import NewItem from './components/NewItem';
import Home from './components/Home';
import './styles.css';

function App (){
return (
    <Routes>
        <Route 
        path="/" 
        element={<Home />}/> 
        <Route 
        path="/newitem" 
        element={<NewItem />}/> 
    </Routes>
)
}

export default App;