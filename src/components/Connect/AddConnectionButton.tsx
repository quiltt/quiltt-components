import * as React from 'react'

import type { ButtonProps } from 'components/Common/Button'
import { usePlaidItemCreateMutation } from 'graphql/types'

import PlaidLinkButton from './Plaid/PlaidLinkButton'

type AddPlaidConnectionButtonProps = ButtonProps & {
  refetch?: () => void
}

const plaidLinkOptions = {
  products: ['transactions'],
}

const AddPlaidConnectionButton: React.FC<AddPlaidConnectionButtonProps> = ({
  children,
  refetch,
  ...buttonProps
}) => {
  const [addConnection] = usePlaidItemCreateMutation()

  const handleSuccess = React.useCallback(
    (publicToken: string, metadata: unknown) => {
      addConnection({
        variables: {
          input: {
            publicToken: publicToken,
            metadata: metadata,
          },
        },
      })
    },
    [addConnection]
  )

  // Since onSuccess fires while PlaidLink is still open, refetching or updating the cache in `onSuccess`
  //  will re-render the parent component (since it depends on the # of PlaidItems) and tear down
  //  Plaid Link unexpectedly, before the user has a chance to hit "Continue".
  //  Targeting the HANDOFF event means we refetch ONLY when the user closes Plaid Link.
  const onEvent = React.useCallback(
    (eventName, metadata) => {
      if (eventName === 'HANDOFF') {
        refetch()
      }
      console.log(metadata)
    },
    [refetch]
  )

  return (
    <PlaidLinkButton
      {...buttonProps}
      {...plaidLinkOptions}
      onSuccess={handleSuccess}
      onEvent={onEvent}
    >
      {children}
    </PlaidLinkButton>
  )
}

export default AddPlaidConnectionButton
