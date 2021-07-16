import { ApolloLink, HttpLink } from '@apollo/client'

// If request is a preview mutation, then terminates chain and directly calls
// the api with the preview header set. Any requests made in preview mode will
// be rolled back.
const usePreviewLink = (endpoint: string) => {
  const previewLink = new ApolloLink((operation, forward) => {
    const context = operation.getContext()

    operation.setContext({
      headers: {
        ...context.headers,
        'Quiltt-Preview': true,
      },
    })

    return forward(operation)
  })

  const httpLink = new HttpLink({ uri: endpoint.toString() })

  const forwardableLink = new ApolloLink((operation, forward) => {
    return forward(operation)
  })

  return ApolloLink.split(
    (operation) => operation.getContext().preview,
    ApolloLink.from([previewLink, httpLink]),
    forwardableLink
  )
}

export default usePreviewLink
