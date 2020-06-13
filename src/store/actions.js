import * as types from './mutations-types'
import { getResource } from './services'

export default {

  async getProperty (context, data) {
    context.commit(types.DATA_LOADING, true)

    try {
      const result = await getResource(data)

      context.commit(types.DATA_SUCCESS, result)
    } catch (error) {
      context.commit(types.DATA_ERROR, error)
    } finally {
      context.commit(types.DATA_LOADING, false)
    }
  }

}
