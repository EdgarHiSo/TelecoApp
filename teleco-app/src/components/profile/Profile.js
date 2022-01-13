
import { useEffect, useState } from 'react';
import service from '../../services/teleco-service';
import { useNavigate } from 'react-router-dom';
import './Profile.css'
function Profile() {
    const [profile, setProfile] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        service.profile()
            .then(user => {
                setProfile(user)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='card mb-3'>
            <img className='avatar img-fluid  rounded-circle me-3' src={profile?.avatar} alt={profile?.username} />
            <div className='card-body'>
                <div className='profile'>
                    <p>{profile?.username}</p>
                    <p>{profile?.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile

/*<img className='avatar img-fluid  rounded-circle me-3' src={profile.avatar} alt={profile.username}/>  */
/*<p>{profile.username}</p>  */
/* <p>{profile.bio}</p> */