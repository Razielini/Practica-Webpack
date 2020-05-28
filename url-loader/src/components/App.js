import React, { useState } from 'react'
import data from '../data/data.json'
import Loader from './Loader'
import logo from '../images/platzi.png'
import video from '../video/que-es-core.mp4'

console.log(data)
function App () {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="Logo" width={40} />
      </p>
      <ul>
        {
          loaderList.map((item) => (
            <Loader {...item } key={item.id} />
          ))
        }
      </ul>
      <button
        onClick={handleClick}
      >
        Mostrar lo aprendido hasta el momento
      </button>
    </div>
  )
}

export default App