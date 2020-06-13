import Vue from 'vue'
import Vuex from 'vuex'

import User from "./modules/user"
import Bookmarks from "./modules/bookmarks"

export const modules = {
  User,
  Bookmarks
}
 
Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
