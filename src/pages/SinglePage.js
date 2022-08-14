
import { useEffect, useState } from "react";
import axios from 'axios'
import { useAuth } from "../hook/useAuth";
import { useParams } from "react-router-dom";



export const SinglePage = () => {

    const {id} = useAuth()
    const [data, setData] = useState([])




    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/movie/616037/?api_1213key=9fa67ee8322b567bb8c91a2102d6a80f`)
        .then(res => setData(res?.data))
        .catch(er => console.log(er))
    }, [])



    return (
        <>
            <h1>single page</h1>



            <div className="single">
                <div className="container">
                    {
                        data.length &&
                        data.map((e) => (
                            <h1>{e.title}</h1>
                        ))
                    }

                </div>

            </div>
        </>
    )
}