import './PostItem.css'
import moment from 'moment'
import {Link} from 'react-router-dom'
import service from '../../services/teleco-service';
//xq entra en posts sin star login??
function PostItem({ created_at, likes, author, image, content, comments, id }) {
    service.profile(id)
    return (
        <div className='card' >
            <img src={image} className='card-img-top' alt={author} />
            <div className='card-body'>
                <div className='info'>
                    <span>{moment(created_at).startOf('day').fromNow()}</span>
                    <button type="button" className="btn btn-danger"><i className="fas fa-heart"></i> ({likes})</button>
                </div>
                <div>
                    <Link to={`/${id}`}><p>{(author).toLowerCase()}</p></Link>
                    <span className='card-text'>{(content.slice(0, 150))}...</span>
                    <p><i className="fas fa-comments"></i>  Comments ({comments})</p>
                </div>
            </div>
        </div>
    )
}
export default PostItem
