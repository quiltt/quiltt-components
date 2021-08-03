import * as React from 'react'
import { render } from '@testing-library/react'
import TransactionList from '.'
import { AccountMock, TransactionMock } from '../../utils/factories'
import { Account as AccountType, Transaction as TransactionType } from '../../types'

export const account: AccountType = AccountMock.build()
export const transactions: TransactionType[] = TransactionMock.buildList(5, { account })

const transactionListComponent: React.ReactElement = <TransactionList transactions={transactions} />

it('renders transaction list component', () => {
  render(transactionListComponent)
  expect(transactionListComponent).toBeTruthy()
})
