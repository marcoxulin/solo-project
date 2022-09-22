import React, { Component, useEffect, useState } from 'react';
// import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import SingleItem from './SingleItem';

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

        }, [items])
        return (
            //line 27: only map when items variable is not null
            <section className="home">
                <h2>List of Items: </h2>
                <div className="items-list">
                {items && items.map ((item) => (
                    // <p key={item._id}>{item.title}</p>
                    <SingleItem key={item._id} item={item}/>
                ))}
                </div>
                <Link to='/newitem' className='newitems-link'>
                    <button type='button' className='btn-new-item'>
                        Add Item
                    </button>
                </Link>
            </section>
        )
}

export default Home;