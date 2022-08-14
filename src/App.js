import {Login} from './pages/Login'
import {Users} from './pages/Users'
import {useAuth} from './hook/useAuth'
import {Private} from './Private'
import { Route, Routes } from 'react-router-dom'
import { SinglePage } from './pages/SinglePage'


function App() {
  const {token} = useAuth()


  return (
    <div className="App">

      <Routes >
      <Route path='*' element= {token ? <Private  /> :  <Login/>}/>


        <Route path='/single'  element={<SinglePage />}/>
      </Routes>

    </div>
  );
}

export default App;
