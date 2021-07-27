import * as React from 'react'

import { PlaidLinkButton, useQuilttContext } from '@quiltt/client'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Summary from './Summary'

const ProfileCard: React.FC = () => {
  const { authorizationToken } = useQuilttContext()

  if (authorizationToken) {
    return (
      <>
        <Summary />
        <PlaidLinkButton />
        <LogoutButton />
      </>
    )
  } else {
    return <LoginButton />
  }
}

export default ProfileCard
