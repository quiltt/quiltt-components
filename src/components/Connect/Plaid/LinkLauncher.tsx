import * as React from 'react'

import { usePlaidLink, PlaidLinkOptions } from 'react-plaid-link'
import type {
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOnLoad,
} from 'react-plaid-link'

import { Button } from 'components/Common'
import type { ButtonProps } from 'components/Common/Button'

export type PlaidLinkLauncherProps = ButtonProps &
  PlaidLinkOptions & {
    token: string
    onSuccess: PlaidLinkOnSuccess
    onExit?: PlaidLinkOnExit
    onEvent?: PlaidLinkOnEvent
    onLoad?: PlaidLinkOnLoad
  }

export const PlaidLinkLauncher: React.FC<PlaidLinkLauncherProps> = ({
  token,
  onSuccess,
  onExit,
  onEvent,
  onLoad,
  icon,
  variant,
  children,
  ...props
}) => {
  const { open, ready, error } = usePlaidLink({
    token: token,
    onSuccess: onSuccess,
    onExit: onExit,
    onEvent: onEvent,
  })

  if (error) throw error

  const handleClick = () => {
    open()
  }

  return (
    <Button
      icon={icon}
      variant={variant}
      size="lg"
      disabled={!ready}
      onClick={handleClick}
      onLoad={onLoad}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PlaidLinkLauncher
