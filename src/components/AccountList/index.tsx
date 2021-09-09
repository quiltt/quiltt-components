import * as React from 'react'

import classNames from 'classnames'

import type { Account as AccountType } from '../../types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'
import Account from '../Account'

type AccountListProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    accounts: Partial<AccountType>[] | AccountType[]
    hideIcons?: boolean
  }

type Ref = React.ReactNode | HTMLElement | string

const AccountList: CustomComponentRefForwardingComponent<'ul', AccountListProps> = React.forwardRef<
  Ref,
  AccountListProps
>(function AccountList(props, ref) {
  const { as = 'ul', className = '', hideIcons = false, accounts, ...otherProps } = props

  const baseStyles = 'flex flex-col w-full divide-y'
  const wrapperStyles = classNames(baseStyles, className)
  const listItemStyles = classNames('p-4')

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
      return (
        <Account
          hideIcon={hideIcons}
          className={listItemStyles}
          account={account}
          key={id}
          as={accountAs}
        />
      )
    })
  )
})

export default AccountList
