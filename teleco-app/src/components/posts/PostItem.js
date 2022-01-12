import './PostItem.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import service from '../../services/teleco-service';
import { useEffect, useState } from 'react';
//xq entra en posts sin star login??
function PostItem({ created_at, likes, author, image, content, comments, id }) {

    const [like, setLike] = useState(likes)
    function handleLike() {
        service.like(id)
            .then(likeData => setLike(likeData["likes"]))
            .catch(err => console.error(err))
    }


    return (
        <div className='card' >
            <img src={image} className='card-img-top' alt={author} />
            <div className='card-body'>
                <div className='info'>
                    <span>{moment(created_at).startOf('day').fromNow()}</span>
                    <button type="button" className="btn btn-danger" onClick={handleLike}><i className="fas fa-heart"></i> ({like})</button>
                </div>
                <div>
                    <p>{(author).toLowerCase()}</p>
                    <span className='card-text'>{(content.slice(0, 150))}...</span>
                    <p><i className="fas fa-comments"></i>  Comments ({comments})</p>
                </div>
            </div>
        </div>
    )
}
export default PostItem
