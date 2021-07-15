import * as React from 'react'

import { Spinner } from '../Common'

// import ConnectionItemsList from './ConnectionItemsList'

export type ConnectProps = {
  data: {
    items: any[]
  }
  isLoading: boolean
}

const Connect: React.FC<ConnectProps> = ({ data, isLoading }) => {
  if (isLoading) return <Spinner kind="overlay" />

  const ConnectCTA = () => {
    return (
      <div className="flex flex-col items-center justify-center flex-auto p-2">
        <h2 className="mb-5 text-3xl text-center">
          Link an Account to Get Started
        </h2>
      </div>
    )
  }

  if (data.items.length < 1) return <ConnectCTA />

  return (
    // <ConnectionItemsList
    //   data={data}
    //   // themeStyle={styles.theme.buttonVariant}
    //   // refetch={refetch}
    // />
    <div>Hello, World!</div>
  )
}

export default Connect
