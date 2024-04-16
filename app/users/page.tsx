import React from 'react';
import UserTablePage from './userTable';

interface Props {
    searchParams:{
        sortOrder: string;
    };
}

const UserPage = async ({searchParams:{sortOrder}}:Props) => {
    return (
        <div>
            <h1>UserPage</h1>
            <UserTablePage sortOrder={sortOrder}/>
        </div>
    )
}

export default UserPage