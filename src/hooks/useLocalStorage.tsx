import * as React from 'react'

// @see https://usehooks.com/useLocalStorage/
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (valueToStore) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } else {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}

export default useLocalStorage
