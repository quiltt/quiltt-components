import * as React from 'react'

import classNames from 'classnames'

import type { Account as AccountType } from '../../types'
import { AccountTypes } from '../../types'
import { CustomComponentProps, CustomComponentRefForwardingComponent } from '../../utils/components'
import { currencyFormatter } from '../../utils/currency'

import AccountIcons from './AccountIcons'

type AccountProps = Partial<AccountType> & {
  hideIcon?: boolean
}

const AccountContent: React.FC<AccountProps> = ({
  type = AccountTypes.Other,
  name,
  lastFourDigits,
  balance,
  hideIcon = false,
}) => (
  <>
    {hideIcon ? null : <AccountIcons type={type} />}
    <div className="flex-auto w-4/5 overflow-hidden leading-tight overflow-ellipsis">
      {name ? <div className="font-medium">{name}</div> : null}
      <small className="text-secondary">
        {type}
        {lastFourDigits && ` - x${lastFourDigits}`}
      </small>
    </div>
    {/* Stricter checking to display $0.00 */}
    {balance !== null && balance?.current !== null && balance?.current !== undefined ? (
      <div>{currencyFormatter(balance.current)}</div>
    ) : null}
  </>
)

type AccountComponentProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    account: AccountProps
    hideIcon?: boolean
  }

type Ref = React.ReactNode | HTMLElement | string

const Account: CustomComponentRefForwardingComponent<'div', AccountComponentProps> =
  React.forwardRef<Ref, AccountComponentProps>(function Account(props, ref) {
    const { as = 'div', className = '', hideIcon = false, account, ...otherProps } = props

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
      <AccountContent
        type={type}
        name={name}
        lastFourDigits={lastFourDigits}
        balance={balance}
        hideIcon={hideIcon}
      />
    )
  })

export default Account
