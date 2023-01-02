import React, { useState } from 'react';

export const AddTodoItem = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [req, setReq] = useState(false);
    const handleChange = () => {
        setReq(current => !current);
    };
    const submit = (e) => {
        e.preventDefault();
        let alreadyIn = false;
        let i = 0;
        while (i < props.todos.length) {
            if (props.todos[i].title === title) {
                alreadyIn = true;
                break;
            }
            i = i + 1;
        }

        if (!title || !desc) {
            alert("Title or Description can not be blank!")
        }
        else if (alreadyIn) {
            alert("Title is already in your todo bucket")
        }
        else {
            props.addTodo(title, desc, req);
            setDesc("");
            setTitle('');
//             setReq(true);
        }
    }
    return (
        <form onSubmit={submit} className="container my-3" >
            <h3>
                Add a Todo Item
            </h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Add Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" value={req} onChange={handleChange} className="form-check-input" id="cumpulsory" />
                <label className="form-check-label" htmlFor="cumpulsory">Mark Important</label>
            </div>
            <button type="submit" className="btn btn-success">Add Item</button>
        </form>
    )
}
