import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div id="mainC" className="pt-5 mt-5">
            <div className="message mt-5 pt-5">
                <h1>404</h1>
                <h3>the page you seek does not exist</h3>
            </div>
            <div className="footer">
                <Link to="/">Back Home <span></span></Link>
            </div>
        </div>
    );
}

export default NotFound;
