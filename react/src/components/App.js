import React, { useState } from 'react'
import data from '../data/data.json'
import Loader from './Loader'

console.log(data)
function App () {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
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