import * as React from 'react'

import Account from '../Account'
import AccountList from '../AccountList'
import Transaction from '../Transaction'
import TransactionList from '../TransactionList'
import Section from '../Section'

import '@quiltt/components/dist/index.css'

const App: React.FC = () => {
  return (
    <main className="grid min-w-full min-h-screen font-sans antialiased">
      <div className="px-4">
        <div className="w-full h-full max-w-5xl py-4 mx-auto border-l border-r divide-y">
          <h1 className="p-4 my-3 text-3xl font-semibold">Components</h1>
          <Section title="Account">
            <Account />
          </Section>
          <Section title="Account" description="with transactions as `children`">
            <Account hasTransactions />
          </Section>
          <Section title="AccountList">
            <AccountList />
          </Section>
          <Section title="Transaction">
            <Transaction />
          </Section>
          <Section title="TransactionList">
            <TransactionList />
          </Section>
          <Section>
            <p>Spacer</p>
          </Section>
        </div>
      </div>
    </main>
  )
}

export default App
