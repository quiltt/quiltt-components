import * as React from 'react'

import classNames from 'classnames'
import Account from '../Account'

import type { Account as AccountType } from '../../types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'

type AccountListProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    accounts: AccountType[]
  }

type Ref = React.ReactNode | HTMLElement | string

const AccountList: CustomComponentRefForwardingComponent<'ul', AccountListProps> = React.forwardRef<
  Ref,
  AccountListProps
>(function AccountList(props, ref) {
  const { as = 'ul', className = '', accounts, ...otherProps } = props

  const baseStyles = 'flex flex-col w-full'
  const wrapperStyles = classNames(baseStyles, className)
  const listItemStyles = classNames('p-4 border-b border-gray-200 last:border-b-0')

  const accountAs = as === 'ul' || as === 'ol' ? 'li' : 'div'

  return React.createElement(
    as as string,
    {
      className: wrapperStyles,
      ref,
      ...otherProps,
    },
    accounts.map((account) => {
      const { id } = account
      return <Account className={listItemStyles} account={account} key={id} as={accountAs} />
    })
  )
})

export default AccountList
