import * as React from 'react'

import { render } from '@testing-library/react'

import { Account as AccountType } from '../../types'
import { AccountMock } from '../../utils/factories'

import AccountList from '.'

export const accounts: AccountType[] = AccountMock.buildList(10)

const accountListComponent: React.ReactElement = <AccountList accounts={accounts} />

it('renders account list component', () => {
  render(accountListComponent)
  expect(accountListComponent).toBeTruthy()
})
