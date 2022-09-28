import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
//single item component
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
            <p><strong>Added: </strong>{formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})}</p>
            <span>
                <div>
                <button className='btn-delete' onClick={deleteItem}>
                    Delete
                </button>
                </div>
                <div>
                <Link to={`/edititem/${item._id}`} className='edit-link'>
                    <button type='button' className='btn-edit-item'>
                        Edit
                    </button>
                </Link>
                </div>
            </span>
        </div>
    )
}

export default SingleItem;