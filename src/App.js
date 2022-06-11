import './App.css';
import React from 'react';
function App() {
  return (

    
    <div className="flex  justify-center max-w-xs mt-60 mx-auto  shadow-xl rounded-xl p-5 bg-neutral-900 ">
     
      <div className="text-center mt-5">
      
      <input class="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter the city"/>
        <div className="mt-2 p-4  text-center w-auto">
          <span className="text-4xl font-thin text-white ">name</span>          
        </div>
        <div className="text-center text-xl  p-4 text-white flex justify-between">
          <span>weather</span>
          <span>wind</span>
        </div>       
             <div className=" flex justify-between text-lg text-grey-light">
              <span className="text-right text-white ">one</span>
              <span className="text-center text-white ">two</span>
              <span className="text-left text-white">three</span>
            </div>
            <div className="text-grey-light tracking-wide text-white mt-5">
            description
            </div>
          
        
      </div>
    </div>


  );
}

export default App;
