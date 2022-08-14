import {Routes, Route} from 'react-router-dom'
import {Header, Home, Movies, Top, Tv, Up} from './components'
import './private.scss'

export const Private = ({id, setId}) => {
    return(
        <>
        <Header/>
        <div className="route__inner">
        <Routes>
            <Route path='/'element={<Home />}/>
            <Route path='/movies'element={<Movies/>}/>
            <Route path='/top'element={<Top/>}/>
            <Route path='/up'element={<Up/>}/>
            <Route path='/tv'element={<Tv/>}/>
        </Routes>
        </div>

        </>
    )
}
