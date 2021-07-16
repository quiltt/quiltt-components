import { setContext } from '@apollo/client/link/context'

const useAuthLink = (token: string | undefined) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }
  })
}

export default useAuthLink
