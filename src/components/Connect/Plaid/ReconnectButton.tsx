import * as React from 'react'

import { CogIcon } from '@heroicons/react/outline'

import { Button, Spinner } from 'components/Common'
import {
  PlaidItemStatus,
  usePlaidLinkTokenCreateForUpdateMutation,
} from 'graphql/types'

import LinkLauncherWrapper from './LinkLauncherWrapper'

type ReconnectButtonProps = {
  id: string
  setConnectionStatus:
    | React.Dispatch<React.SetStateAction<PlaidItemStatus>>
    | ((arg0: PlaidItemStatus) => void)
}

const ReconnectButton: React.FC<ReconnectButtonProps> = ({
  id,
  setConnectionStatus,
}) => {
  // Optimistically set status to Syncing since we can expect the Plaid Webhook to fire imminently.
  //  Currently we rely on Subscriptions to keep Plaid Items updated, so we don't need to trigger
  //  a refetch of the `plaidItems` query
  // TODO: instead of passing `setConnectionStatus` around, we should be updating the item's status
  //  in the Apollo cache: @see - https://www.apollographql.com/docs/react/caching/cache-interaction/#writefragment
  const onSuccess = React.useCallback(() => {
    setConnectionStatus(PlaidItemStatus.Syncing)
  }, [setConnectionStatus])

  const onExit = React.useCallback((err, metadata) => {
    if (err) throw new Error(`${err} ${{ metadata }}`)
  }, [])

  const [linkToken, setLinkToken] = React.useState<string | null>(null)

  const [createLinkToken, { called, error }] =
    usePlaidLinkTokenCreateForUpdateMutation({
      variables: {
        input: {
          plaidItemId: id,
          countryCodes: ['US'],
        },
      },
      onCompleted(data) {
        const { record, errors } = data.plaidLinkTokenCreateForUpdate

        if (error) {
          return console.log('error', errors)
        }

        setLinkToken(record.linkToken)
      },
    })

  // This pattern should only renders once
  React.useEffect(() => {
    let mounted = true
    if (!called && !linkToken) {
      createLinkToken()
    }

    if (mounted) {
      return function cleanup() {
        mounted = false
      }
    }
  }, [called, createLinkToken, linkToken])

  if (error) {
    Honeybadger.notify(error)
    console.log('error', error)
    return null
  }

  if (!linkToken) return <Spinner size="sm" />

  // Pass props down to the children: https://stackoverflow.com/a/54534202/5673885
  return (
    <LinkLauncherWrapper
      token={linkToken}
      onSuccess={onSuccess}
      onExit={onExit}
    >
      {(props) => (
        <Button icon={CogIcon} variant="success" {...props}>
          Reconnect
        </Button>
      )}
    </LinkLauncherWrapper>
  )
}

export default ReconnectButton
