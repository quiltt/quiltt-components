import * as React from 'react'

import {
  Account,
  TransactionList,
  AccountMock,
  AccountWithTransactionsMock,
} from '@quiltt/components'

import type { TransactionType } from '@quiltt/components'

const account = AccountMock.build()
const accountWithTransactions = AccountWithTransactionsMock.build()

type AccountComponentProps = {
  hasTransactions?: boolean
}

const AccountComponent: React.FC<AccountComponentProps> = ({ hasTransactions = false }) => {
  if (!hasTransactions) {
    return <Account account={account} />
  }

  return (
    <Account account={accountWithTransactions}>
      <div className="w-full p-4">
        <TransactionList transactions={accountWithTransactions.transactions as TransactionType[]} />
      </div>
    </Account>
  )
}

export default AccountComponent
