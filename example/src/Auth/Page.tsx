import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { useQuilttContext } from 'quiltt-components'

import Passcode from './Passcode'
import Username from './Username'

export const AuthPage: React.FC = () => {
  const navigate = useNavigate()
  const { setAuthorizationToken } = useQuilttContext()
  const [email, setEmail] = React.useState<string>()

  const handleIdentification = (email: string) => {
    setEmail(email)
  }

  const handleAuthentication = (token: string) => {
    setAuthorizationToken(token)

    if (navigate) navigate('/')
  }

  const loginForm = () => {
    if (!email) {
      return <Username onAuthentication={handleAuthentication} onIdentification={handleIdentification} />
    } else {
      return <Passcode onAuthentication={handleAuthentication} email={email} />
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 text-black bg-gray-300 dark:bg-gray-900 dark:text-white sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center">Sign in to your account</h2>
        </div>

        {loginForm()}
      </div>
    </div>
  )
}

export default AuthPage
