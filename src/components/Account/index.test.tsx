import * as React from 'react'
import { render } from '@testing-library/react'
import type { Account as AccountType } from '../../types'
import Account from '.'

const props = {
  account: {
    balance: {
      available: 10.0,
      current: 10.0,
      id: '1',
    },
    bills: [],
    id: '1',
    lastFourDigits: '1234',
    name: 'Plaid Gold Standard 0% Interest Checking',
    state: 'OPEN',
    status: 'ACTIVE',
    transactions: [],
    transactionsConnection: {
      edges: [],
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    type: 'CHECKING',
  } as AccountType,
}

const accountComponent: React.ReactElement = <Account account={props.account} />

it('renders account component', () => {
  render(accountComponent)
  expect(accountComponent).toBeTruthy()
})
