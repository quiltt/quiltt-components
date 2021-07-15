import * as React from 'react'

import { TrashIcon } from '@heroicons/react/outline'

import { Button } from 'components/Common'
import type { ButtonProps } from 'components/Common/Button'
import { usePlaidItemUnlinkMutation } from 'graphql/types'

type UnlinkButtonProps = ButtonProps & {
  id: string
  name: string
}

const UnlinkButton: React.FC<UnlinkButtonProps> = ({
  id,
  name,
  children,
  ...buttonProps
}) => {
  const [unlink, { loading }] = usePlaidItemUnlinkMutation({
    variables: { id: id },
    update: (cache, results) => {
      cache.evict({
        id: cache.identify(results.data.plaidItemDelete.record),
      })
    },
  })

  const handleClick = () => {
    if (window.confirm(`Are you sure you want to unlink ${name}?`)) {
      unlink()
    }
  }

  return (
    <Button
      icon={TrashIcon}
      {...buttonProps}
      layout="outline"
      disabled={loading}
      onClick={handleClick}
    >
      {children || <span className="uppercase">Unlink</span>}
    </Button>
  )
}

export default UnlinkButton
