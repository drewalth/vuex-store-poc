import { modules } from '../index'

describe('vuex modules', () => {
  it('core: fetches data with provided info and handles success', () => {
    for (const module in modules) {
      console.log('module :>> ', module)
    }
  })
})
