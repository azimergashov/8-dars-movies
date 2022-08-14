import './tv.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../Card'

export const Tv = ({setId}) => {

    const [tv, setTv] = useState([])
    useEffect(() =>{
        axios
        .get('https://api.themoviedb.org/3/tv/popular?api_key=9fa67ee8322b567bb8c91a2102d6a80f')
        .then(res => setTv(res.data.results))
        .catch(er => console.log(er))
    }, [])
    return (
        <>
        <div className='container'><h1>Tv</h1>
            <ul className='tv__list'>
                {
                    tv.length &&
                    tv.map((e) => (
                        <Card key={e.id} title={e.title} time={e.release_date} img={e.poster_path} id={e.id} />
                    ))
                }
            </ul>
        </div>
        </>
    )
}