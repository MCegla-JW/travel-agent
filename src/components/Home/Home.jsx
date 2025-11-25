import './Home.css'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router'

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <main>
            {!user ? (
                <div>
                    <h1>Logo</h1>
                    <h1>Your next trip, realized</h1>
                    <p>Images of trips</p>
                    <Link to='/auth/sign-in'>Sign In</Link>
                    <Link to='/auth/sign-up'>Create Account</Link>
                </div>
            ) : (
                <div>
                    <h1>Logo</h1>
                    <h1>{user.username}</h1>
                </div>
            )}
        </main>
    )
}

export default Home