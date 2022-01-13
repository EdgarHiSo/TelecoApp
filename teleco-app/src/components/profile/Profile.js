
import { useEffect, useState } from 'react';
import service from '../../services/teleco-service';
import { useNavigate } from 'react-router-dom';
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
    return(
        <div>{profile["bio"]}</div>
    )
}

export default Profile