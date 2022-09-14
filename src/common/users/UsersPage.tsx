import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames'
import { getUsers } from '../../api/apiAndPoints';
import { UserItem } from './userItem/UserItem';
import { Slider } from './Slider';
import './index.scss';
import { PostsList } from '../posts/PostsList';


export type UserProps = {
    name: string,
    email: string,
    id: number,
    phone: string,
}

export const UsersPage = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [page, setPage] = useState(0);
    const [postId, setPostId] = useState<number>();

    const usersRef = useRef<UserProps[]>([]);
    const usersPerPage = 4;

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data.slice(0, 4))
            usersRef.current = data;
        })
    }, [])


    const handlerPrev = () => {
        const currentPage = page - 1
        const start = currentPage * usersPerPage;
        const end = currentPage * usersPerPage + usersPerPage;
        if (page === 0) {
            return null
        }
        const prev = usersRef.current.slice(start, end)

        setUsers(prev)
        setPage(currentPage)

    }

    const handlerNext = () => {
        const currentPage = page + 1
        const start = currentPage * usersPerPage;
        const end = currentPage * usersPerPage + usersPerPage;
        const next = usersRef.current.slice(start, end)
        if (start > usersRef.current.length) {
            return null
        }
        setUsers(next)
        setPage(currentPage)

    }

    const inputHand = (event: React.SyntheticEvent) => {
        let value = (event.target as HTMLInputElement).value;
        console.log(value)
        if (users && value.length > 0) {
            const fined = users.filter(user => {
                const name = user.name.toLowerCase().includes(value.toLowerCase())
                const email = user.email.toLowerCase().includes(value.toLowerCase())
                const phone = user.phone.toLowerCase().includes(value.toLowerCase())

                return (name || email || phone) && user
            });
            setUsers(fined)
        } else {
            setUsers(usersRef.current.slice(0, 4))
        }
    }
    const handlePost = (id: number) => {
        setPostId(id)
    }
    const handleClosePosts = () => {
        setPostId(0)
    }

    return (
        <div className='container'>
            <header className="header">
                <div className="title">
                    Users
                </div>
                <form className="search" >
                    <input onChange={inputHand}
                        type="text"
                        className="search__input"
                        placeholder="Search"
                        name="input" />
                </form>
            </header>
            <section className={classNames({ 'with-posts': Boolean(postId) })}  >
                <div className='users'  >
                    <div className="users__path">
                        {
                            users.map(user => <UserItem key={user.id}  
                                {...user} withPosts={Boolean(postId)} handlePost={handlePost} />)
                        }
                    </div>
                </div>
                {postId && (
                    <PostsList id={postId} handleClosePosts={handleClosePosts} />
                )}

            </section>
            <Slider
                disablePrev={page === 0}
                disableNext={(page + 1) * usersPerPage > usersRef.current.length}
                handlerNext={handlerNext}
                handlerPrev={handlerPrev} />
        </div>
    );
};

