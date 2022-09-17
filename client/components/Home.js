import React, { Component, useEffect, useState } from 'react';
// import { render } from 'react-dom';




function Home (){

    const [items, setItems] = useState(null);

    useEffect( () =>{
        const fetchItems = async () => {
            //not completed yet
            const response = await fetch ('/api/items');
            const json = await response.json();
            if(response.ok){
                setItems(json);
            }
        }
        fetchItems()
        }, [])
        return (
        //only map when items variable is not null
            <div className="items">
                {items && items.map ((item) => (
                    <p key={item._id}>{item.title}</p>
                ))}
            </div>
        )
}

export default Home;