import * as React from 'react'

import Honeybadger from '@honeybadger-io/js'

import { ListGroup } from 'components/Common'
import { Card, Heading } from 'components/Common'
import {
  Account as AccountType,
  PlaidItem,
  PlaidItemStatus,
  usePlaidItemUpdatedSubscription,
} from 'graphql/types'

import Account from '../Account'
import ReconnectButton from './ReconnectButton'
import SyncStatus from './SyncStatus'
import UnlinkButton from './UnlinkButton'

type AccountListProps = {
  accounts: AccountType[]
}

function AccountList({ accounts }: AccountListProps) {
  return (
    <ListGroup variant="flush">
      {accounts.map((account) => {
        return (
          <Account
            type={account.type}
            name={account.name}
            lastFourDigits={account.lastFourDigits}
            currentBalance={account.balance.current}
            key={account.id}
          />
        )
      })}
    </ListGroup>
  )
}

function ReconnectCTA({
  id,
  name,
  setConnectionStatus,
}: {
  id: string
  name: string
  setConnectionStatus: React.Dispatch<React.SetStateAction<PlaidItemStatus>>
}) {
  return (
    <Card.Body className="text-center">
      {/* <Card.Text>Please reconnect to {name} to continue syncing your accounts.</Card.Text> */}
      <ReconnectButton
        id={id}
        data-name={name}
        setConnectionStatus={setConnectionStatus}
      />
    </Card.Body>
  )
}

type ItemProps = {
  item: PlaidItem
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [connectionStatus, setConnectionStatus] = React.useState(item.status)

  // Apollo automagically updates the cache so we don't need to do anything when subscription fires
  const { error } = usePlaidItemUpdatedSubscription({
    variables: { id: item.id },
  })

  if (error) {
    Honeybadger.notify(error)
  }

  const Logo = () => {
    return (
      item.logo && (
        <img
          src={item.logo.url}
          alt={`${item.name} logo`}
          className="object-contain w-8 h-8 mr-2"
          width="32"
          height="32"
        />
      )
    )
  }

  return (
    <Card className="my-3 shadow-sm">
      <Card.Header>
        <Heading as="h5" className="items-center">
          <Logo />
          {item.name}
        </Heading>
      </Card.Header>
      {connectionStatus === PlaidItemStatus.Disconnected ? (
        <ReconnectCTA
          id={item.id}
          name={item.name}
          setConnectionStatus={setConnectionStatus}
        />
      ) : (
        <AccountList accounts={item.accounts} />
      )}
      <Card.Footer className="flex items-center justify-between border-top-0">
        <SyncStatus id={item.id} />
        <UnlinkButton
          id={item.id}
          name={item.name}
          variant="danger"
          size="sm"
        />
      </Card.Footer>
    </Card>
  )
}

export default Item
