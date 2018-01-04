import {SERVICE_INDEX} from './mutationsTypes'
export default {
  [SERVICE_INDEX](state, {index}) {
    state.index = index
  }
}
