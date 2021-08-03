import * as React from 'react'
import { render } from '@testing-library/react'
import Account from '.'
import { Account as AccountType, AccountTypes, LedgerState, LedgerStatus } from '../../types'

const account: AccountType = {
  balance: {
    available: 10.0,
    current: 10.0,
    id: '1',
  },
  bills: [],
  id: '1',
  lastFourDigits: '1234',
  name: 'Plaid Gold Standard 0% Interest Checking',
  state: LedgerState.Open,
  status: LedgerStatus.Active,
  transactions: [],
  transactionsConnection: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  },
  type: AccountTypes.Checking,
}

const accountComponent: React.ReactElement = <Account account={account} />

it('renders account component', () => {
  render(accountComponent)
  expect(accountComponent).toBeTruthy()
})
