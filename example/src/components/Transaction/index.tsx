import * as React from 'react'

import { Transaction, AccountMock, TransactionMock } from '@quiltt/components'

import type { AccountType, TransactionType } from '@quiltt/components'

const account: Partial<AccountType> = AccountMock.build()
const transaction: Partial<TransactionType> = TransactionMock.build({ account } as {
  account: AccountType
})

// type TransactionComponentProps = {
//   hasTransactions?: boolean
// }

const TransactionComponent: React.FC = () => {
  return <Transaction transaction={transaction} />
}

export default TransactionComponent
