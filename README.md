# @quiltt/components

[![NPM](https://img.shields.io/npm/v/@quiltt/components.svg)](https://www.npmjs.com/package/@quiltt/components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript/tree/master/react)

## Install

```bash
npm install --save @quiltt/components
```

or

```bash
yarn add @quiltt/components
```

## Usage

```tsx
import * as React from 'react'

import '@quiltt/components/dist/index.css'

import { AccountList } from '@quiltt/components'

const Example = () => {
  //  .......................  //
  //  Data fetching step here  //
  //  .......................  //
  return <AccountList accounts={accounts} />
}

export default Example
```

## Usage with `@quiltt/client`

```tsx
import * as React from 'react'

import '@quiltt/components/dist/index.css'

import { gql, useQuery } from '@apollo/client'
import { QuilttProvider } from '@quiltt/client'
import { AccountList, PlaidLinkButton } from '@quiltt/components'

const GET_ACCOUNTS = gql`
  # insert accounts query here
`

const ConnectApp: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNTS)
  if (loading) return <p>Loading...</p>
  if (error) throw error
  const { accounts } = data.plaidItems[0]
  return (
    <div>
      <AccountList accounts={accounts} />
      <PlaidLinkButton block />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <QuilttProvider>
      <ConnectApp />
    </QuilttProvider>
  )
}

export default App
```

## License

MIT © [quiltt](https://github.com/quiltt)
