import * as React from 'react'

import { render } from '@testing-library/react'

import { AccountMock, TransactionMock } from '../../utils/factories'

import Transaction from '.'

export const account = AccountMock.build()
export const transaction = TransactionMock.build({ account })

const transactionComponent: React.ReactElement = <Transaction transaction={transaction} />

it('renders transaction component', () => {
  render(transactionComponent)
  expect(transactionComponent).toBeTruthy()
})
