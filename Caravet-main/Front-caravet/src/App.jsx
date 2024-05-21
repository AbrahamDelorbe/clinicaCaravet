import { useAuth0 } from '@auth0/auth0-react'
//import { useState } from 'react'
import './App.css'
import LoginButton from './sessionSettings/login'
/* import LogoutButton from './sessionSettings/logout'  */
import HomePage from './pages/Home'


//

export default function App() {

const {isAuthenticated} = useAuth0()

return <>

{isAuthenticated ? <>

<HomePage/>
{/* <LogoutButton /> */}

</> 

:<LoginButton />  
}

</>



}

