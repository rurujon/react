import React from 'react';
import data from './data';
import {Link, Route} from 'react-router-dom/cjs/react-router-dom'
import Front from './Front';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to='/profile/html'>html</Link></li>
                <li><Link to='/profile/css'>css</Link></li>
                <li><Link to='/profile/javascript'>javascript</Link></li>
                <li><Link to='/profile/react'>react</Link></li>
            </ul>

            <Route path='/profile/:name'>
                <Front data={data}/>
            </Route>
        </div>
    );
};

export default Profile;