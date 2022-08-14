import { useEffect, useState } from 'react'
import './up.scss'
import axios from 'axios'
import { Card } from '../Card'

export const Up = ({setId}) => {
    const [up, setUp] = useState([])
    useEffect(() =>{
        axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=9fa67ee8322b567bb8c91a2102d6a80f')
        .then(res => setUp(res.data.results))
        .catch(er => console.log(er))
    }, [])

    return (
        <>
        <div className='container'><h1>Up</h1>
            <ul className='up__list'>
                {
                    up.length &&
                    up.map((e) => (
                        <Card key={e.id} title={e.title} time={e.release_date} img={e.poster_path} id={e.id} />
                    ))
                }
            </ul>
        </div>
        </>
    )
}