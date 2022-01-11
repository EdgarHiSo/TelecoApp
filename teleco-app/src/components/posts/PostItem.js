import './PostItem.css'
function PostItem({ created_at, likes, author, image, content, comments, id }) {
    return (
        <div className='card' >
            <img src={image} className='card-img-top' alt={author} />
            <div className='card-body'>
                <p className='card-text'>{content}</p>
            </div>
        </div>
    )
}
export default PostItem