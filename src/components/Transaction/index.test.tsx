import * as React from 'react'
import { render } from '@testing-library/react'
import Transaction from '.'
import { AccountMock, TransactionMock } from '../../utils/factories'
import { Account as AccountType, Transaction as TransactionType } from '../../types'

export const account: AccountType = AccountMock.build()
export const transaction: TransactionType = TransactionMock.build({ account })

const transactionComponent: React.ReactElement = <Transaction transaction={transaction} />

it('renders transaction component', () => {
  render(transactionComponent)
  expect(transactionComponent).toBeTruthy()
})
