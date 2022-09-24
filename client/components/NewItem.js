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
            setError(json.err)
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
                    <h3>Add the item that you want to let go</h3>
                    <label>Item name:</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                    <label>Category:</label>
                    <input type='text' onChange={(e) => setCategory(e.target.value)} value={category}></input>
                    <button>Add Item</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            </section>
        )
}

export default NewItem;