import axios from 'axios'

let options = {
  timeout:50000
}

export default axios.create(options)