import React, { useEffect, useState } from 'react'
import service from '../../services/teleco-service';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom'
function PostList() {

    const [posts, setPosts] = useState()
    const navigate = useNavigate()

    
    useEffect(() => {
        service.posts()
            .then(posts => setPosts(posts))
            .catch(console.error)
    }, [])
    
    if (!posts) return <></>
    return (
        <div className='m-3'>
            <div>
                {posts?.map(post => 
                <PostItem  {...post} key={post.id}/>
                )}
            </div>
        </div>
    )
}
export default PostList