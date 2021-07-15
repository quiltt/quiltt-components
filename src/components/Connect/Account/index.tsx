import * as React from 'react'

import { ListGroup } from 'components/Common'
import { currencyFormatter } from 'utils/currency'

import AccountIcons, { AccountIconTypes } from './AccountIcons'

export type AccountProps = {
  type: AccountIconTypes
  name: string
  lastFourDigits?: string
  currentBalance?: number
}

const Account: React.FC<AccountProps> = ({
  type,
  name,
  lastFourDigits,
  currentBalance,
}) => {
  return (
    <ListGroup.Item
      style={{ cursor: 'default' }} // remove this when accounts are made clickable
      className="items-stretch cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <AccountIcons type={type as AccountIconTypes} />
        <div className="flex-auto overflow-hidden leading-tight overflow-ellipsis">
          <div className="font-medium">{name}</div>
          <small className="text-secondary">
            {type}
            {lastFourDigits && `- x${lastFourDigits}`}
          </small>
        </div>
        {currentBalance !== null && currentBalance !== undefined ? (
          <div>{currencyFormatter(currentBalance)}</div>
        ) : null}
      </div>
    </ListGroup.Item>
  )
}

export default Account
