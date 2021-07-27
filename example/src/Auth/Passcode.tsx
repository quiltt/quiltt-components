import * as React from 'react'

import { useQuilttAuth } from '@quiltt/client'

export type PasscodeProps = {
  email: string
  // eslint-disable-next-line no-unused-vars
  onAuthentication: (token: string) => void
}

const quilttAppID = import.meta.env.VITE_APP_QUILTT_APP_ID as string

console.log(quilttAppID)

export const Passcode: React.VFC<PasscodeProps> = ({ email, onAuthentication }) => {
  const [passcode, setPasscode] = React.useState<string>()
  const auth = useQuilttAuth(quilttAppID)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!passcode) return

    const response = await auth.authenticate({ email: email }, passcode)
    switch (response.status) {
      case 201: // Created
        onAuthentication(response.data.token)
        break
      case 401: // Unauthorized
      case 422: // Unprocessable Entity
        break
      // TODO: Handle Error
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="-space-y-px shadow-sm">
        <div>
          <label htmlFor="passcode" className="sr-only">
            Pass Code
          </label>
          <input
            id="passcode"
            name="passcode"
            type="passcode"
            autoComplete="on"
            className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="000000"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Passcode
