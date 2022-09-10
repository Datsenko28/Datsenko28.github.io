import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/apiAndPoints';
import { UserItem } from './userItem/UserItem';
import './index.scss';
export type UserProps = {
	name: string,
	email: string,
	id: number | string,
	phone: number | string,

} 

export const UsersPage = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    
useEffect( ()=> {
    getUsers().then(data => {
        console.log(data)
        setUsers(data)
    })
        
},[])

    return (
        <section className='users'>
            <div className="users__row">
                {
                    users.map(user => <UserItem key={user.id} {...user} />)
                }
            </div>
        </section>
    );
};

