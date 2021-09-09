import * as React from 'react'

import { render } from '@testing-library/react'

import { AccountMock } from '../../utils/factories'

import Account from '.'

const account = AccountMock.build()

const accountComponent: React.ReactElement = <Account account={account} />

it('renders account component', () => {
  render(accountComponent)
  expect(accountComponent).toBeTruthy()
})
