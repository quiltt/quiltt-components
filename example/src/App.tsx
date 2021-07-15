import * as React from 'react'

import 'quiltt-components/dist/index.css'

import { Connect } from 'quiltt-components'

const App = () => {
  const data = { items: [] }
  const isLoading = false
  return (
    <div>
      <Connect data={data} isLoading={isLoading} />
    </div>
  )
}

export default App
