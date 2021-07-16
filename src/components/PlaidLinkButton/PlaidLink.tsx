import * as React from 'react'
import { usePlaidLink } from 'react-plaid-link'
import { gql, useMutation } from '@apollo/client'
import { Button } from 'components/Common'

import { ButtonProps } from 'components/Common/Button'

const CREATE_PLAID_ITEM = gql`
  mutation PlaidItemCreate($input: PlaidItemCreateInput!) {
    plaidItemCreate(input: $input) {
      success
      record {
        id
        name
        accounts {
          id
          name
        }
      }
    }
  }
`

export type PlaidLinkProps = ButtonProps & {
  linkToken: string
}

const PlaidLink: React.FC<PlaidLinkProps> = ({ linkToken, ...otherProps }) => {
  const [create] = useMutation(CREATE_PLAID_ITEM, {
    onCompleted: (result) => {
      // eslint-disable-next-line no-console
      console.log(result.plaidItemCreate.record)
    },
  })

  const handleSuccess = (publicToken: string, metadata: any) => {
    create({
      variables: {
        input: {
          publicToken,
          metadata,
        },
      },
    })
  }

  const { open, ready, error } = usePlaidLink({
    token: linkToken,
    onSuccess: handleSuccess,
  })

  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (error) throw error

  return (
    <Button onClick={() => open()} disabled={!ready} {...otherProps}>
      Add Bank Connection
    </Button>
  )
}

export default PlaidLink
