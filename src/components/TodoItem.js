import React from 'react';

export default function TodoItem({ todokey, onDelete, count }) {
    return (
        <div>
            <h4>
                {count}. {todokey.title} {todokey.req ? <span className='text-danger'>*</span> : ""}
            </h4>
            <p>
                {todokey.desc}
            </p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todokey)}>Delete</button>
            <hr></hr>
        </div>
    )
}