import * as React from 'react'

import { useQuilttContext } from 'quiltt-components'

const LogoutButton: React.FC = () => {
  const { setAuthorizationToken } = useQuilttContext()

  const handleClick = () => {
    setAuthorizationToken(undefined)
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-flex items-center px-6 py-3 mt-5 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Sign out
    </button>
  )
}

export default LogoutButton
