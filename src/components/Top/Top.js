import { useEffect, useState } from 'react'
import { Card } from '../Card'
import './top.scss'
import axios from 'axios'

export const Top = ({setId}) => {
    const [top, setTop] = useState([])
    useEffect(() =>{
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=9fa67ee8322b567bb8c91a2102d6a80f')
        .then(res => setTop(res.data.results))
        .catch(er => console.log(er))
    }, [])
    return (
        <>
        <div className='container'><h1>Top</h1>
        <ul className='top__list'>
            { top.length &&
                top.map((e) =>(
                    <Card key={e.id} title={e.title} time={e.release_date} img={e.poster_path} id={e.id} />
                ))
            }
        </ul>
        </div>

        </>
    )
}