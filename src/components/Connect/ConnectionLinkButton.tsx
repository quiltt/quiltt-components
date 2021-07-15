import * as React from 'react'

import AddPlaidConnectionButton from './AddConnectionButton'

const ConnectionLinkButton = ({ variant, children, refetch }) => {
  return (
    <AddPlaidConnectionButton
      id="plaidLink"
      variant={variant}
      refetch={refetch}
    >
      {children}
    </AddPlaidConnectionButton>
  )
}

export default ConnectionLinkButton
