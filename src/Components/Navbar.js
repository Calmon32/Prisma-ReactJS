import React from 'react';
import { Link } from 'react-router-dom'

function Title(props) {
    return <div className="nav">
        <ul>
            <li>
                <Link to="/profile" className="navName"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"  className="navProfileImg"/>Lucas</Link>
            </li>
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul>
    </div>
}

export default Title