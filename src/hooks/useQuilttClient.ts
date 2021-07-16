import { ApolloClient, InMemoryCache } from '@apollo/client'

import useQuilttLink from 'hooks/useQuilttLink'

const useQuilttClient = (token: string | undefined) => {
  const quilttLink = useQuilttLink(token)

  return new ApolloClient({
    link: quilttLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export default useQuilttClient
