import * as React from 'react'

import { currencyFormatter } from 'utils/currency'

import type { Transaction as TransactionType } from 'types'
import { friendlyDate } from 'utils/date'

type TransactionProps = {
  transaction: TransactionType
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { description, date, amount } = transaction
  return (
    <div className="flex items-center justify-between">
      <div className="overflow-hidden">
        <strong className="truncate">{description}</strong>
        <div className="leading-tight">{friendlyDate(date)}</div>
      </div>
      <strong>{currencyFormatter(amount)}</strong>
    </div>
  )
}

export default Transaction
