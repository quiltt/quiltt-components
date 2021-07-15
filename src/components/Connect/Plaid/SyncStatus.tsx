import * as React from 'react'

import { Spinner } from 'components/Common'
import { PlaidItemStatus, usePlaidItemSyncStatusQuery } from 'graphql/types'
import { timeDifference } from 'utils/date'

type SyncStatusProps = {
  id: string
}

const SyncStatus: React.VFC<SyncStatusProps> = ({ id }) => {
  const { data, loading, error } = usePlaidItemSyncStatusQuery({
    variables: { id: id },
  })

  if (error) throw error

  // Always return something so the Disconnect button isn't jumping around.
  if (loading) {
    return <Spinner kind="inline" size="sm" />
  }

  if (data.plaidItem.status == PlaidItemStatus.Syncing) {
    return (
      <Spinner kind="inline" size="sm">
        <small className="ml-2">Syncing...</small>
      </Spinner>
    )
  } else if (data.plaidItem.syncedAt) {
    return <small>Last synced {timeDifference(data.plaidItem.syncedAt)}</small>
  } else {
    // TODO: Handle error state
    return <small></small>
  }
}

export default SyncStatus
