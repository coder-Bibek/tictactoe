export const Storage = {
    getItem: (key) => {
        return localStorage.getItem(key)
    },

    removeItem: (key) => {
        return localStorage.removeItem(key)
    },

    setItem: (key, item) => {
        return localStorage.setItem(key, item)
    },
}
