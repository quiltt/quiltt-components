import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { QuilttProvider } from '@quiltt/client'

import Auth from './Auth'
import Starter from './Starter'

export const App: React.FC = () => {
  return (
    <QuilttProvider>
      <Routes>
        <Route path="/" element={<Starter.Home />} />
        <Route path="/connect" element={<Starter.Connect />} />
        <Route path="/auth" element={<Auth.Page />} />
      </Routes>
    </QuilttProvider>
  )
}

export default App
