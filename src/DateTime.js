import  React, { useState , useEffect } from 'react'
import './App.css'
import clock from './clock.png'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='date-time'>

            <img src={clock} 
            className="clock"
            alt='clock'>
            </img>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime