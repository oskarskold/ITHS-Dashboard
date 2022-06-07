import {useState, useEffect} from 'react'
import './Clock.css'

const Clock = () => {

    const [time, setTime] = useState(new Date())
    useEffect( () =>{
        setInterval(() => updateClock(), 1000)
    },[])

   function updateClock(){
      setTime(new Date())
   }

    return (
        <div className='clock-bg'>
            <p className='clock-text'>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock;