import Axios from 'axios'

const ENDPOINT = 'https://auth.quiltt.io/v1/users/session'
const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status: number) => status < 500,
}

export type UsernamePayload = {
  email: string
}

export type PasscodePayload = {
  email: string
  passcode: string
}

const useQuilttAuth = (appId: string) => {
  const AuthAPI = {
    ping: () => {
      return Axios.get(ENDPOINT, CONFIG)
    },
    identify: (username: UsernamePayload) => {
      return Axios.post(
        ENDPOINT,
        { session: { app_id: appId, ...username } },
        CONFIG
      )
    },
    authenticate: (username: UsernamePayload, passcode: string) => {
      return Axios.put(
        ENDPOINT,
        { session: { app_id: appId, ...username, passcode } },
        CONFIG
      )
    },
  }

  return AuthAPI
}

export default useQuilttAuth
