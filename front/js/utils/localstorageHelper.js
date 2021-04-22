class LocalStorageHelper {
   getItem = (key) => {
      return localStorage.hasOwnProperty(key) ? JSON.parse(localStorage.getItem(key)) : null
   }
   setItem = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
   }
}