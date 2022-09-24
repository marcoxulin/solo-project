import React from 'react';
// import { render } from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import NewItem from './components/NewItem';
import Home from './components/Home';
import './styles.css';
import EditItem from './components/EditItem';

function App (){
return (
    <Routes>
        <Route 
        path="/" 
        element={<Home />}/> 
        <Route 
        path="/newitem" 
        element={<NewItem />}/> 
        <Route 
        path="/edititem/:id" 
        element={<EditItem />}/> 
    </Routes>
)
}

export default App;