import * as React from 'react'

import Transaction from 'components/Transaction'

import type { Transaction as TransactionType } from 'types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from 'utils/components'
import classNames from 'classnames'

type TransactionListProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    transactions: TransactionType[]
  }

type Ref = React.ReactNode | HTMLElement | string

const TransactionList: CustomComponentRefForwardingComponent<'ul', TransactionListProps> =
  React.forwardRef<Ref, TransactionListProps>(function TransactionList(props, ref) {
    const { as = 'ul', className = '', transactions, ...otherProps } = props

    const baseStyles = 'flex flex-col w-full'
    const wrapperStyles = classNames(baseStyles, className)
    const listItemStyles = classNames('p-4 border-b border-gray-200 last:border-b-0')

    const transactionAs = as === 'ul' || as === 'ol' ? 'li' : 'div'

    return React.createElement(
      as as string,
      {
        className: wrapperStyles,
        ref,
        ...otherProps,
      },
      transactions.map((transaction) => {
        const { id } = transaction
        return (
          <Transaction
            className={listItemStyles}
            transaction={transaction}
            key={id}
            as={transactionAs}
          />
        )
      })
    )
  })

export default TransactionList
