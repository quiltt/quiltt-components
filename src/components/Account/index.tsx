import * as React from 'react'

import { currencyFormatter } from 'utils/currency'

import type { Account as AccountType } from 'graphql/types'
import AccountIcons from './AccountIcons'

const Account: React.FC<AccountType> = ({
  type,
  name,
  lastFourDigits,
  balance,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <AccountIcons type={type} />
      <div className="flex-auto overflow-hidden leading-tight overflow-ellipsis">
        <div className="font-medium">{name}</div>
        <small className="text-secondary">
          {type}
          {lastFourDigits && `- x${lastFourDigits}`}
        </small>
      </div>
      {/* Stricter checking to display $0.00 */}
      {balance !== null && balance !== undefined ? (
        <div>{currencyFormatter(balance.current as number)}</div>
      ) : null}
    </div>
  )
}

export default Account
