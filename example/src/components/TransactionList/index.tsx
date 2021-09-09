import * as React from 'react'

import { AccountMock, TransactionList, TransactionMock } from '@quiltt/components'
import type { AccountType, TransactionType } from '@quiltt/components'

const account: Partial<AccountType> = AccountMock.build()
const transactions: Partial<TransactionType>[] = TransactionMock.buildList(10, { account } as {
  account: AccountType
})

const TransactionListComponent: React.FC = () => <TransactionList transactions={transactions} />

export default TransactionListComponent
