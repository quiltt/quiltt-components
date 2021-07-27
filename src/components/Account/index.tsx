import * as React from 'react'

import { currencyFormatter } from 'utils/currency'

import type { Account as AccountType, AccountTypes } from 'types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from 'utils/components'
import classNames from 'classnames'
import AccountIcons from './AccountIcons'

type AccountContentProps = {
  type: AccountTypes
  name: AccountType['name']
  lastFourDigits?: AccountType['lastFourDigits']
  balance?: AccountType['balance']
}

type AccountProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    account: AccountType
  }

type Ref = React.ReactNode | HTMLElement | string

const AccountContent: React.FC<AccountContentProps> = ({ type, name, lastFourDigits, balance }) => (
  <>
    <AccountIcons type={type} />
    <div className="flex-auto w-4/5 overflow-hidden leading-tight overflow-ellipsis">
      <div className="font-medium">{name}</div>
      <small className="text-secondary">
        {type}
        {lastFourDigits && `- x${lastFourDigits}`}
      </small>
    </div>
    {/* Stricter checking to display $0.00 */}
    {balance?.current ? <div>{currencyFormatter(balance.current as number)}</div> : null}
  </>
)

const Account: CustomComponentRefForwardingComponent<'div', AccountProps> = React.forwardRef<
  Ref,
  AccountProps
>(function Account(props, ref) {
  const { as = 'div', className = '', account, ...otherProps } = props

  const baseStyles = 'flex items-center justify-between space-x-3'
  const wrapperStyles = classNames(baseStyles, className)

  const { type, name, lastFourDigits, balance } = account

  return React.createElement(
    as as string,
    {
      className: wrapperStyles,
      ref,
      ...otherProps,
    },
    <AccountContent type={type} name={name} lastFourDigits={lastFourDigits} balance={balance} />
  )
})

export default Account
