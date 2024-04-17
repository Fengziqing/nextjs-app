import React from 'react';
import UserTablePage from './userTable';
import Link from 'next/link';
import {Suspense} from 'react';

interface Props {
    searchParams:{
        sortOrder: string;
    };
}

const UserPage = async ({searchParams:{sortOrder}}:Props) => {
    return (
        <div>
            <h1>UserPage</h1>
            <Link href="/users/new" className='btn'>New User</Link>
            <Suspense fallback={<p>loading...</p>}>
                <UserTablePage sortOrder={sortOrder}/>
            </Suspense>
        </div>
    )
}

export default UserPage