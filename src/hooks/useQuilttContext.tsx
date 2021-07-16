import * as React from 'react'

export type QuilttContextType = {
  authorizationToken: string | undefined
  setAuthorizationToken: (token: string | undefined) => void
}

export const QuilttContext = React.createContext<QuilttContextType>({
  authorizationToken: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAuthorizationToken: (_token) => {},
})

const useQuilttContext = () => {
  return React.useContext(QuilttContext)
}

export default useQuilttContext
