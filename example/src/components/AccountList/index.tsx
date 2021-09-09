import * as React from 'react'

import { AccountList, AccountMock } from '@quiltt/components'
import type { AccountType } from '@quiltt/components'

const accounts: Partial<AccountType>[] = AccountMock.buildList(10)

const AccountListComponent: React.FC = () => <AccountList accounts={accounts} />

export default AccountListComponent
