import Cookies from 'js-cookie'

class CookieModule {
  getCookie(storageKey) {
    return Cookies.get(storageKey)
  }

  setCookie(storageKey, data) {
    Cookies.set(storageKey, data)
  }

  clearCookie(storageKey) {
    Cookies.remove(storageKey)
  }
}

export default CookieModule