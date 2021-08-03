import * as React from 'react'
import { render } from '@testing-library/react'
import Account from '.'
import { AccountMock } from '../../utils/factories'
import { Account as AccountType } from '../../types'

export const account: AccountType = AccountMock.build()

const accountComponent: React.ReactElement = <Account account={account} />

it('renders account component', () => {
  render(accountComponent)
  expect(accountComponent).toBeTruthy()
})
