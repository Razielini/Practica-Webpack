import React, { useState } from 'react'
import data from '../data/data.json'
import Loader from './Loader'
import logo from '../images/platzi.png'
import video from '../video/que-es-core.mp4'

import '../sass/sass.scss'
import '../less/less.less'
import '../stylus/stylus.styl'

console.log(data)
function App () {
  const [loaderList, setLoaderList] = useState([])

  const handleClick = async () => {
    setLoaderList(data.loaders)
    const { Alerta } = await import('./Alerta')
    Alerta('Super Mensaje')
  }

  return (
    <div>
      <p className="sass">
        Esto es SASS
      </p>
      <p className="less">
        Esto es LESS
      </p>
      <p className="stylus">
        Esto es STYLUS
      </p>
      <p className="post-css">
        Estos es POSTCSS
      </p>
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