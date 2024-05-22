import axios from 'axios'
import { useEffect, useState } from 'react'

export const Data_get = () => {
    const [gets, setGets] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(gets => setGets(gets))
    }, [gets])
    const deleteData =function(id){
        axios.delete('http://localhost:8000/users/'+id)
        .then(response=>console.log(response))
    }
    return (
        <div className='container'>
            <div className='Data_get_xett'></div>
            <h2 className='Data_get_basliq '>Featured Products</h2>
            <div className='row mt-5'>

                {gets.map(element => {
                    return (
                        <div className='col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0 data_yazi mt-5'>
                            <img src={element.img} alt="" className='Data_get_img' />
                            <h3>{element.Ad}</h3>
                            <p>{element.About}</p>
                            <p className='pul'>{element.Money}</p>
                            <button className='btn btn-primary' onClick={()=>deleteData(element.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
