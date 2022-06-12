import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e21fcda9af1ae3c27f3aa4242c1d4533`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(
        (response) => {
          setData(response.data)
          console.log(response.data)
        }
      )
    }

  }
  return (
    <div> <h1 className="flex justify-center max-w-xs mx-auto mb-100 my-11 text-5xl font-bold leading-7 text-indigo-900 sm:text-5xl sm:truncate font-mono" >weatherapp</h1> 

    <div className="flex  justify-center max-w-xs  mx-auto  shadow-xl rounded-xl p-5 bg-indigo-700		 ">
        
      <div className="text-center mt-5">

        {/* TO DO  fix the the return object object */}
        <input class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter the city"
          value={location}
          type="text"
          onChange={(event) => setLocation(event.currentTarget.value)}
          onKeyPress={searchLocation}
          
        />

        <div className="mt-2 p-4  justify-between text-center w-auto">
          <span className="text-4xl text-white ">{data.name}</span>
          {data.sys ?<span className="text-4xl text-white ">,{data.sys.country}</span> : null }
        </div>

        <div className="text-center text-2xl  p-4 text-white flex justify-between">
        {data.weather  ? <span>{data.weather[0].main}</span> : null}

        {data.wind  ? <span>{data.wind.speed} m/s</span> : null}
        </div>

        <div className=" flex mt-5 justify-between text-lg text-grey-light">
          {data.main ? <span className="text-left mr-10 text-white ">{data.main.temp_min}°F</span> : null}
          {data.main ? <span className="text-center text-white ">{data.main.temp}°F</span> : null}
          {data.main ? <span className="text-right ml-10 text-white ">{data.main.temp_max}°F</span> : null}
        </div>

        {data.weather ? <div className="text-grey-light tracking-wide text-white mt-5 text-4xl">{data.weather[0].description}</div> : null}

      </div>
    </div>
    </div>

  );
}

export default App;
