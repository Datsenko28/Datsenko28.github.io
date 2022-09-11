import React, {useEffect, useState} from 'react';
import { PostItem } from './PostItem';
import { getPostsById } from '../../api/apiAndPoints';

type Props = {
    id: number
    handleClosePosts: ()=>void
}
export const PostsList = ({id, handleClosePosts}: Props) => {
    const [posts, setPosts] = useState([]);
   
    useEffect( ()=> {
        getPostsById(id).then(data => {
            setPosts(data)
        })   
    },[id])

    return (
		<>
			<div className="posts">
                <button onClick={handleClosePosts}>close</button>
				{
					posts?.map(post => <PostItem key={post.id} {...post} />)
				}
			</div>
		</>
	)
};

