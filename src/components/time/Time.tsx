import './time.css'
import { useState } from 'react'
export default function Time() {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1 className="time">{ctime}</h1>
}
