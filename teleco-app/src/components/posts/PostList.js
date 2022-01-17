import React, { useEffect, useState } from 'react'
import service from '../../services/teleco-service';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom'
function PostList() {

    const [posts, setPosts] = useState()
    const [filteredPosts, setFilteredPosts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        service.posts()
            .then(posts => {
                setPosts(posts)
                setFilteredPosts(posts)
            })
            .catch(console.error)
    }, [])

    function handleSearch(ev) {
        setFilteredPosts(posts.filter(post => post.author.toLowerCase().includes(ev.target.value.toLowerCase())))
    }

    if (!posts || !filteredPosts) return <>Loading....</>
    return (
        <div >
            <div>
                <form className="px-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                </form>
            </div>
            <div className='m-3'>
                {filteredPosts.map(post =>
                    <PostItem  {...post} key={post.id} />
                )}
            </div>
        </div>
    )
}
export default PostList