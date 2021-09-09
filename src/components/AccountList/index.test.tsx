import * as React from 'react'

import { render } from '@testing-library/react'

import { AccountMock } from '../../utils/factories'

import AccountList from '.'

export const accounts = AccountMock.buildList(10)

const accountListComponent: React.ReactElement = <AccountList accounts={accounts} />

it('renders account list component', () => {
  render(accountListComponent)
  expect(accountListComponent).toBeTruthy()
})
