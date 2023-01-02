import React, { useState } from 'react';
import TodoItem from './TodoItem';
let styleContainer = {
    minHeight: "40vh"
}

export const Todos = (props) => {
    let i = 0;
    const [showImp, setShowImp] = useState(false);
    const handleChange = () => {
        setShowImp(current => !current);
    }
    return (
        <>
            <div className="container" style={styleContainer}>
                <h3 className=" my-4">Todos LIST</h3>
                <div className="mb-3 form-check">
                    <input type="checkbox" value={showImp} onChange={handleChange} className="form-check-input" id="cumpulsory" />
                    <label className="form-check-label" htmlFor="cumpulsory">Show Important Only</label>
                </div>
                {(!showImp) ?
                    (props.todos.length === 0 ? <h4>No Todos to display</h4> : props.todos.map((todo) => {
                        return (<TodoItem key={todo.sno} todokey={todo} onDelete={props.onDelete} count={++i} />)
                    }
                    )) :
                    (props.todos.length === 0 ? <h4>No Todos to display</h4> : props.todos.map((todo) => {
                        if (todo.req) {
                            return (<TodoItem key={todo.sno} todokey={todo} onDelete={props.onDelete} count={++i} />)
                        }
                        else if (todo === props.todos[props.todos.length - 1] && i === 0) {
                            return (
                                <h4>No Thodos to display</h4>
                            )
                        }
                    }
                    ))

                }

            </div>
        </>
    )
}