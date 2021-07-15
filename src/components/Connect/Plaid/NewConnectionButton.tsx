import * as React from 'react'

import { Button } from 'components/Common'
import { usePlaidLinkTokenCreateMutation } from 'graphql/types'

import LinkLauncherWrapper from './LinkLauncherWrapper'

type PlaidProduct = 'transactions' | 'auth' | 'liabilities' | 'investments'

type Props = {
  linkAccountFilters: any
  linkProducts: PlaidProduct[]
  linkCustomizationName?: string
  block?: boolean
  buttonId: string
  children: React.ReactChildren
  onSuccess: (metadata: any, publicToken: any) => void
}

const NewConnectionButton: React.FC<Props> = ({
  linkAccountFilters,
  linkProducts,
  linkCustomizationName,
  block = false,
  buttonId,
  children,
  onSuccess,
}) => {
  const [linkToken, setLinkToken] = React.useState<string | null>(null)
  const [createLinkToken, { called, error }] = usePlaidLinkTokenCreateMutation({
    variables: {
      input: {
        accountFilters: linkAccountFilters,
        linkCustomizationName: linkCustomizationName,
        products: linkProducts,
        countryCodes: ['US'],
      },
    },
    onCompleted(data) {
      const { record, errors } = data.plaidLinkTokenCreate

      if (errors) {
        throw new Error(`Errors creating the LinkToken ${errors}`)
      }

      setLinkToken(record.linkToken)
    },
  })

  // Create a Plaid Link Token unless creation has already been triggered
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
    throw new Error(error as unknown as string)
    return null
  }

  if (!linkToken) return null

  return (
    <LinkLauncherWrapper token={linkToken} onSuccess={onSuccess}>
      {(props) => (
        <Button id={buttonId} block={block} size="lg" variant="dark" {...props}>
          {children}
        </Button>
      )}
    </LinkLauncherWrapper>
  )
}

export default NewConnectionButton
