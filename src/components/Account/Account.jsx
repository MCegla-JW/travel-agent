import './Account.css'
import { Link } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Account = () => {
    const { user, signOut } = useContext(UserContext)
    return (
        <>  
            {user ? <h3>Hi, {user.username}!</h3> : <p>Signed Out</p>}
            <button disabled>Edit Account</button>
            <Link to='/' onClick={signOut}><button type='submit'>Sign Out</button></Link>
            <Link to='/trips'><button>Back</button></Link>
        </>
    )
}

export default Account