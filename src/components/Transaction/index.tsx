import * as React from 'react'

import classNames from 'classnames'
import type { Transaction as TransactionType } from '../../types'
import { friendlyDate } from '../../utils/date'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'
import { currencyFormatter } from '../../utils/currency'

type TransactionContentProps = {
  description: TransactionType['description']
  date: TransactionType['date']
  amount: TransactionType['amount']
}

type TransactionProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    transaction: {
      __typename?: 'Transaction'
      account?: TransactionType['account']
      amount: TransactionType['amount']
      date: TransactionType['date']
      description: TransactionType['description']
      entryType?: TransactionType['entryType']
      id?: TransactionType['id']
      metadata?: TransactionType['metadata']
      source?: TransactionType['source']
      sources?: TransactionType['sources']
      status?: TransactionType['status']
    }
  }

type Ref = React.ReactNode | HTMLElement | string

const TransactionContent: React.FC<TransactionContentProps> = ({ description, date, amount }) => (
  <>
    <div className="overflow-hidden">
      <strong className="truncate">{description}</strong>
      <div className="leading-tight">{friendlyDate(date)}</div>
    </div>
    <strong>{currencyFormatter(amount)}</strong>
  </>
)

const Transaction: CustomComponentRefForwardingComponent<'div', TransactionProps> =
  React.forwardRef<Ref, TransactionProps>(function Transaction(props, ref) {
    const { as = 'div', className = '', transaction, ...otherProps } = props

    const baseStyles = 'flex items-center justify-between space-x-3'
    const wrapperStyles = classNames(baseStyles, className)

    const { description, date, amount } = transaction

    return React.createElement(
      as as string,
      {
        className: wrapperStyles,
        ref,
        ...otherProps,
      },
      <TransactionContent description={description} date={date} amount={amount} />
    )
  })

export default Transaction
