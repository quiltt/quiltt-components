import * as React from 'react'

import { Heading } from 'components/Common'
import { PlaidItem as PlaidItemType } from 'graphql/types'

import PlaidItem from './Plaid/Item'
import PlaidLinkButton from './ConnectionLinkButton'

const ConnectionItemsList = ({ data, themeStyle, refetch }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading as="h4" className={themeStyle}>
          Connected Accounts
        </Heading>
        <PlaidLinkButton variant="dark" refetch={refetch}>
          Add
        </PlaidLinkButton>
      </div>
      {data.plaidItems.map((item) => {
        return <PlaidItem item={item as PlaidItemType} key={item.id} />
      })}
    </>
  )
}

export default ConnectionItemsList
