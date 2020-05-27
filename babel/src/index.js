import './styles/styles.css'
import text from './js/index.js'

text()

if (module.hot) {
  module.hot.accept('./js/index.js', function () {
    console.log('hot module')
    text()
  })
}