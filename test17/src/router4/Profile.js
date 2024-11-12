import React from 'react';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to='/profile/user1'>정인선</Link></li>
                <li><Link to='/profile/user2'>배수지</Link></li>
                <li><Link to='/profile/user3'>박신혜</Link></li>
                <li><Link to='/profile/user4'>유인나</Link></li>
            </ul>

            <Route path='/profile/:user'>
                <User/>
            </Route>
        </div>
    );
};

export default Profile;