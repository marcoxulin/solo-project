import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';



function EditItem (){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);

    const params = useParams();
    const id = params.id

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('inside handlesubmit')
        const item = {title, category}
        const response = await fetch('/api/items/' + id, {
            method: 'PATCH',
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
            alert('Item Edited');
            console.log('Item Successfully Edited');
        }
    }

        return (
            <section className='edit-item-container'>
                <Link to='/' className='back-link'>
                    <button type='button' className='btn-back'>
                        Back to Home
                    </button>
                </Link>
                <form className='create' onSubmit={handleSubmit}>
                    <h3>Edit Item: {params.id}</h3>
                    <label>Item name:</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                    <label>Category:</label>
                    <input type='text' onChange={(e) => setCategory(e.target.value)} value={category}></input>
                    <button>Accept</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            </section>
        )
}

export default EditItem;