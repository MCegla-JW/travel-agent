import './App.css'
import { Routes, Route } from 'react-router'

//* Page Components
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <>
    <NavBar />
    <main>
      <Routes>
        <Route path='auth/sign-in' element={<SignIn />}/>
        <Route path='auth/sign-up' element={<SignUp />}/>
        <Route path='auth/*' element={<NotFound/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
