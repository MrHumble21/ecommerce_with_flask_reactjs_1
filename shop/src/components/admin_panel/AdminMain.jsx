import React, {useState} from 'react'
import './custom.css'
import AdminDashboard from "./AdminDashboard";
import {Link} from "react-router-dom";


const AdminMain = () => {
    const [day, setNight] = useState(true)
    const [Day, Night] = useState(true)
    // const [Day, Night] = useState(true)

    const nightModeHandler = () => {
        document.body.classList.toggle('darkMode')
        setNight(!day)
        Night(!Day)
    }
    return (
        <div >
          <nav className={` navbar  ${day ? 'nav-bg-light': 'nav-bg-dark'} da nav-bg navbar-expand-lg bg-transparent ${day ? 'navbar-light': 'navbar-dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand nav-bg p-2" href="123">Admin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="123">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="123">Customers List</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product-list">Product List</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="123" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Administrative Works
                            </a>
                            <ul className="nav-bg mt-3 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="123">Create SubAdmin</a></li>
                                <li><a className="dropdown-item" href="123">Supervise Admins</a></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a onClick={nightModeHandler} className="nav-link" href="123">{Day ?  "Day" : "Night"}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            <AdminDashboard />















        </div>

    )
}

export default AdminMain