import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import NewItem from './components/NewItem';
import Home from './components/Home';

// class App extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Hello World</h1>
//             </div>
//         );
//     }
// }

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