import actions from '../actions'
import mutations from '../mutations'

export default {
  namespaced: true,
  state: {
    error: false,
    loading: false,
    data: null
  },
  actions: Object.assign(actions, {
    async customAction () {
      console.log('Custom action')
    }
  }),
  mutations
}
