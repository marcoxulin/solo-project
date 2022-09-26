import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function NewItem (){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = {title, category}
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()

        if(!response.ok){
            console.log(json);
            setError(json.error)
        }
        if(response.ok){
            setTitle('');
            setCategory('');
            setError(null);
            alert('New Item Added');
            console.log('New Item Added');
        }
    }

        return (
            <section className='add-item-container'>
                <Link to='/' className='back-link'>
                    <button type='button' className='btn-back'>
                        Back to Home
                    </button>
                </Link>
                <form className='create' onSubmit={handleSubmit}>
                    <h3>Add Item to Declutter: </h3>
                    <div className='input-area'>
                        <label>Item name:</label>
                        <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                    </div>
                    <div className='input-area'>
                        <label>Category:</label>
                        <input type='text' onChange={(e) => setCategory(e.target.value)} value={category}></input>
                    </div>

                    {error && <div className='error'>{error}</div>}
                   
                    <button className='btn-add'>Add Item</button>
                </form>
            </section>
        )
}

export default NewItem;