import * as React from 'react'
import { gql, useMutation } from '@apollo/client'
import { Button } from 'components/Common'
import { ButtonProps } from 'components/Common/Button'
import PlaidLink from './PlaidLink'

const CREATE_PLAID_LINK_TOKEN = gql`
  mutation plaidLinkTokenCreate($input: PlaidLinkTokenCreateInput!) {
    plaidLinkTokenCreate(input: $input) {
      success
      record {
        linkToken
        expiration
      }
    }
  }
`

const PlaidLinkButton: React.FC<ButtonProps> = (props) => {
  const [linkToken, setLinkToken] = React.useState<string | undefined>()
  const [create] = useMutation(CREATE_PLAID_LINK_TOKEN, {
    variables: { input: { products: ['transactions'] } },
    onCompleted: (result) => {
      setLinkToken(result.plaidLinkTokenCreate.record.linkToken)
    },
  })

  React.useEffect(() => {
    if (!linkToken) create()
  }, [linkToken, create])

  if (!linkToken) {
    return (
      <Button disabled {...props}>
        Loading...
      </Button>
    )
  }
  return <PlaidLink linkToken={linkToken} {...props} />
}

export default PlaidLinkButton
