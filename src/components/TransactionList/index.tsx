import * as React from 'react'

import { ListGroup } from 'components/Common'
import Transaction from 'components/Transaction'
import type { Transaction as TransactionType } from 'types'

type TransactionListProps = {
  transactions: TransactionType[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ListGroup variant="flush">
      {transactions.map((transaction: TransactionType) => {
        const { id } = transaction
        return (
          <ListGroup.Item className="items-stretch" key={id}>
            <Transaction transaction={transaction} />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default TransactionList
