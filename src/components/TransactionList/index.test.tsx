import * as React from 'react'

import { render } from '@testing-library/react'

import { AccountMock, TransactionMock } from '../../utils/factories'

import TransactionList from '.'

export const account = AccountMock.build()
export const transactions = TransactionMock.buildList(5, { account })

const transactionListComponent: React.ReactElement = <TransactionList transactions={transactions} />

it('renders transaction list component', () => {
  render(transactionListComponent)
  expect(transactionListComponent).toBeTruthy()
})
