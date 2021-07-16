import { onError } from '@apollo/client/link/error'

const useErrorLink = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map((error) => {
        // eslint-disable-next-line no-console
        console.log(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
        )

        return error
      })
    }

    if (networkError) {
      // eslint-disable-next-line no-console
      console.log(`[Network error]: ${networkError}`)
    }
  })

  return errorLink
}

export default useErrorLink
