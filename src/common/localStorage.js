const ID_TOKEN_KEY = 'id_token'

export default {
  get (item) {
    return window.localStorage.getItem(item)
  },

  save (item) {
    window.localStorage.setItem(item, item)
  },

  destroy (item) {
    window.localStorage.removeItem(item)
  }
}