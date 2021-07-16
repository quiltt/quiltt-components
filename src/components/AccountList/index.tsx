import * as React from 'react'

import { ListGroup } from 'components/Common'
import Account from 'components/Account'
import { Account as AccountType } from 'graphql/types'

type AccountListProps = {
  accounts: AccountType[]
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  return (
    <ListGroup variant="flush">
      {accounts.map((account: AccountType) => {
        const { type, name, lastFourDigits, balance, id, ...otherProps } =
          account
        return (
          <ListGroup.Item className="items-stretch" key={id}>
            <Account
              id={id}
              type={type}
              name={name}
              lastFourDigits={lastFourDigits}
              balance={balance}
              {...otherProps}
            />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default AccountList
