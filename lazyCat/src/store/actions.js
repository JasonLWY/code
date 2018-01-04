import {getIndex} from 'api/index'
import {SERVICE_INDEX} from './mutationsTypes'
import {error_code} from 'api/config'

export  default {

  reqIndex({commit},callback) {
    getIndex().then(response =>{
      const result = response.data
      if (result.error_code === error_code) {
        const index = result
        commit(SERVICE_INDEX, {index})
        callback && callback()
      }
    })
  }
}
