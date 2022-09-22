import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SingleItem ({ item }) {

    const deleteItem = async () => {
        const response = await fetch ('/api/items/'+item._id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
    }

    return (
        <div className="item-details">
            <h4>{item.title}</h4>
            <p><strong>Category: </strong>{item.category}</p>
            <p>{item.createdAt}</p>
            <span>
                <div>
                <button className='btn-delete' onClick={deleteItem}>
                    Delete
                </button>
                </div>
                <div>
                <Link to='/edititem' className='edit-link'>
                    <button type='button' className='btn-edit-item'>
                        Edit Item
                    </button>
                </Link>
                </div>
            </span>
        </div>
    )
}

export default SingleItem;