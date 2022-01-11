import React, { useEffect, useState } from 'react'
import service from '../../services/teleco-service';

function PostList() {
    const [posts, setPosts] = useState()

    useEffect(() => {
        service.posts()
            .then(post => setPosts(posts))
            .catch(console.error)
    })
    if (!posts) return <p>No fucking posts</p>
    return (
        <div className='mb-3'>
            <p>Hola</p>
        </div>
    )
}
export default PostList