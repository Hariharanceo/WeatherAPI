import { useState } from "react"
import axios from "axios";
function App(){
  const[city,setcity]=useState("")
  const[weather,setweather]=useState("")
  const[temp,settemp]=useState("")
  const[desc,setdesc]=useState("")

  function handlecity(evt)
  {
    setcity(evt.target.value)
  }
  function getweather()
  {
    var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0649ffd4aae55aaa46f2c096da76560b`)
    weatherData.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      settemp(success.data.main.temp)
      setdesc(success.data.weather[0].description)
    })
  }
  return(
    <div className="bg-black p-20">
            <div className="bg-green-500 p-10">
                <h1 className="text-3xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <input onChange={handlecity} className="my-2 p-1 rounded-md" type="text" placeholder="Enter your City name" /> <br/>
                <button onClick={getweather}  className="bg-black p-1 text-white rounded-md my-2">Get Report</button>
                <h1 className="font-medium text-lg">Weather:{weather}</h1>
                <h1 className="font-medium text-lg">Temperature:{temp} </h1>
                <h1 className="font-medium text-lg">Description:{desc}</h1>
            </div>
        </div>
  )
}
export default App