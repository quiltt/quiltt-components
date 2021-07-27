import * as React from 'react'

import { currencyFormatter } from 'utils/currency'

import type { Transaction as TransactionType } from 'types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from 'utils/components'
import { friendlyDate } from 'utils/date'
import classNames from 'classnames'

type TransactionContentProps = {
  description: TransactionType['description']
  date: TransactionType['date']
  amount: TransactionType['amount']
}

type TransactionProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    transaction: TransactionType
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
    const { as = 'div', className, transaction, ...otherProps } = props

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
