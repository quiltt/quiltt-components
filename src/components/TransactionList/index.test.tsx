import * as React from 'react'

import { render } from '@testing-library/react'

import { Account as AccountType, Transaction as TransactionType } from '../../types'
import { AccountMock, TransactionMock } from '../../utils/factories'

import TransactionList from '.'

export const account: AccountType = AccountMock.build()
export const transactions: TransactionType[] = TransactionMock.buildList(5, { account })

const transactionListComponent: React.ReactElement = <TransactionList transactions={transactions} />

it('renders transaction list component', () => {
  render(transactionListComponent)
  expect(transactionListComponent).toBeTruthy()
})
