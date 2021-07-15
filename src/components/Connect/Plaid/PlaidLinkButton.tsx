import * as React from 'react'

import type {
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOnLoad,
} from 'react-plaid-link'

import { PlusIcon } from '@heroicons/react/outline'

import { Button } from 'components/Common'
import type { ButtonProps } from 'components/Common/Button'
import {
  PlaidLinkTokenCreateInput,
  usePlaidLinkTokenCreateMutation,
} from 'graphql/types'

import { PlaidLinkLauncher } from './LinkLauncher'

export type PlaidLinkButtonProps = ButtonProps &
  PlaidLinkTokenCreateInput & {
    onSuccess: PlaidLinkOnSuccess
    onExit?: PlaidLinkOnExit
    onEvent?: PlaidLinkOnEvent
    onLoad?: PlaidLinkOnLoad
  }

export const PlaidLinkButton: React.FC<PlaidLinkButtonProps> = (props) => {
  const {
    variant,
    products,
    linkCustomizationName,
    accountFilters,
    children,
    onSuccess,
    onEvent,
    onLoad = null,
    ...buttonProps
  } = props

  const [linkToken, setLinkToken] = React.useState()

  const handlePlaidTokenCreated = (data) => {
    const { record, errors } = data.plaidLinkTokenCreate
    if (errors) throw errors

    setLinkToken(record.linkToken)
  }

  const [createLinkToken] = usePlaidLinkTokenCreateMutation({
    variables: {
      input: {
        accountFilters: accountFilters,
        linkCustomizationName: linkCustomizationName,
        products: products,
      },
    },
    onCompleted: handlePlaidTokenCreated,
  })

  React.useEffect(() => {
    createLinkToken()
  }, [createLinkToken])

  if (!linkToken) {
    return (
      <Button
        icon={PlusIcon}
        variant={variant}
        size="lg"
        disabled={true}
        {...buttonProps}
      >
        {children}
      </Button>
    )
  }

  return (
    <PlaidLinkLauncher
      icon={PlusIcon}
      variant={variant}
      size="lg"
      onLoad={onLoad as PlaidLinkOnLoad}
      token={linkToken}
      onSuccess={onSuccess}
      onEvent={onEvent}
      {...buttonProps}
    >
      {children}
    </PlaidLinkLauncher>
  )
}

export default PlaidLinkButton
