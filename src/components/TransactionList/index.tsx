import * as React from 'react'

import classNames from 'classnames'

import type { Transaction as TransactionType } from '../../types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'
import Transaction from '../Transaction'

type TransactionListProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    transactions: Partial<TransactionType>[] | TransactionType[]
  }

type Ref = React.ReactNode | HTMLElement | string

const TransactionList: CustomComponentRefForwardingComponent<'ul', TransactionListProps> =
  React.forwardRef<Ref, TransactionListProps>(function TransactionList(props, ref) {
    const { as = 'ul', className = '', transactions, ...otherProps } = props

    const baseStyles = 'flex flex-col w-full divide-y'
    const wrapperStyles = classNames(baseStyles, className)
    const listItemStyles = classNames('p-4')

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
