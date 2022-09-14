import React, { useEffect, useState } from 'react';
import { PostItem } from './PostItem';
import { getPostsById } from '../../api/apiAndPoints';
import './index.scss';

type Props = {
    id: number
    handleClosePosts: () => void
}

export type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}
export const PostsList = ({ id, handleClosePosts }: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPostsById(id).then(data => {
            setPosts(data.slice(5))

        })
    }, [id])

    return (
        <>
            <div className="posts">
                <button className='close__button' onClick={handleClosePosts}>close</button>
                {
                    posts?.map(post => <PostItem key={post.id} {...post} />)
                }
            </div>
        </>
    )
};

