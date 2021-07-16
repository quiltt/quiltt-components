import * as React from 'react'

import { ListGroup } from 'components/Common'
import Account from 'components/Account'
import { Account as AccountType } from 'types'

type AccountListProps = {
  accounts: AccountType[]
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  return (
    <ListGroup variant="flush">
      {accounts.map((account: AccountType) => {
        const { id } = account
        return (
          <ListGroup.Item className="items-stretch" key={id}>
            <Account account={account} />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default AccountList
