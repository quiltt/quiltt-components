import * as React from 'react'

import classNames from 'classnames'

import type { Transaction as TransactionType } from '../../types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'
import { currencyFormatter } from '../../utils/currency'
import { friendlyDate } from '../../utils/date'

type TransactionProps = Partial<TransactionType>

const TransactionContent: React.FC<TransactionProps> = ({ description, date, amount }) => (
  <>
    <div className="overflow-hidden">
      <strong className="truncate">{description}</strong>
      <div className="leading-tight">{friendlyDate(date)}</div>
    </div>
    {amount && amount >= 0 && <strong>{currencyFormatter(amount)}</strong>}
    {amount && amount < 0 && <strong className="text-red-600">{currencyFormatter(amount)}</strong>}
  </>
)

type TransactionComponentProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    transaction: TransactionProps
  }

type Ref = React.ReactNode | HTMLElement | string

const Transaction: CustomComponentRefForwardingComponent<'div', TransactionComponentProps> =
  React.forwardRef<Ref, TransactionComponentProps>(function Transaction(props, ref) {
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
