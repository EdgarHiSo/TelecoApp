import React, { useEffect, useState } from 'react'
import service from '../../services/teleco-service';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom'
function PostList() {

    const [posts, setPosts] = useState()
    const navigate = useNavigate()

    function handleLogOut() {
        localStorage.removeItem('edgar_token')
        navigate('/login')
    }
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
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}
export default PostList