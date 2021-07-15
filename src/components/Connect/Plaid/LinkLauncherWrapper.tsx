import * as React from 'react'

import type {
  PlaidLinkError,
  PlaidLinkOnExitMetadata,
  PlaidLinkOnLoad,
  PlaidLinkOnSuccessMetadata,
} from 'react-plaid-link'
import { usePlaidLink } from 'react-plaid-link'

import Honeybadger from '@honeybadger-io/js'

interface ChildProps {
  onClick: () => void
  disabled: boolean
}
interface Props {
  token: string
  children: React.FC<ChildProps>
  onSuccess: (
    public_token: string,
    metadata: PlaidLinkOnSuccessMetadata
  ) => void
  onExit?: (err: PlaidLinkError, metadata: PlaidLinkOnExitMetadata) => void
  onLoad?: PlaidLinkOnLoad
}

const LinkLauncherWrapper: React.FC<Props> = ({
  token,
  onLoad,
  onSuccess,
  onExit,
  children,
}: Props) => {
  const config = {
    token: token,
    onSuccess,
    onLoad,
    onExit,
  }

  const { open, ready, error } = usePlaidLink(config)

  if (error) {
    Honeybadger.notify(error)
    console.log(error)
    return
  }

  return children({
    onClick: () => open(),
    disabled: !ready,
  })
}

export default LinkLauncherWrapper
