import { ApolloLink } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

import useAuthLink from './useAuthLink'
import useErrorLink from './useErrorLink'
import usePreviewLink from './usePreviewLink'

const graphqlEndpoint = new URL('v1/graphql', 'https://api.quiltt.io')

const useQuilttLink = (token: string | undefined) => {
  const errorLink = useErrorLink()
  const authLink = useAuthLink(token)
  const previewLink = usePreviewLink(graphqlEndpoint.toString())
  const batchLink = new BatchHttpLink({ uri: graphqlEndpoint.toString() })

  // errorLink -> authLink -> previewLink &-> httpLink
  //                                      |-> batchLink

  const quilttLink = ApolloLink.from([
    errorLink,
    authLink,
    previewLink,
    batchLink,
  ])

  return quilttLink
}

export default useQuilttLink
