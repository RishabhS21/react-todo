import React, { useState } from 'react';
import propTypes from 'prop-types';
// import defaultProps from 'default-props'; 

export default function Header(props) {
    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(current => !current);
    };

    const [titleSearch, setTitleSearch] = useState("");
    const submit = (e) => {
        e.preventDefault();
        let i = 0;
        while (i < props.todos.length) {
            if (props.todos[i].title === titleSearch) {
                if (props.todos[i].req) {
                    alert('Hurry, this is an important task to do!')
                }
                else {
                    alert('This task is there in your todo!')
                }
                break;
            }
            i = i + 1;
        }
        if (i === props.todos.length) {
            alert("Take a chill pill, this isn't your task!")
        }
        setTitleSearch('')
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="www.linkedin.com/in/rishabh-kumar-iitd">About Me</a>
                    </li>
                </ul>
                {search ? <form onSubmit={submit} className="d-flex">
                    <input className="form-control me-2" type="search" value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)} placeholder="Search With Exact Title" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> : <button className="btn btn-outline-success" type="submit" onClick={toggleSearch}>Activate Search Bar</button>}
            </div>
        </nav>
    )
}
Header.defaultProps = {
    title: "Your title here",
    search: true
}

Header.propTypes = {
    title: propTypes.string.isRequired,
    search: propTypes.bool
}