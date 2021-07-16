import * as React from 'react'
import { Link } from 'react-router-dom'

import Links from './Links'
import ProfileCard from './Profile/Card'

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-300 dark:bg-gray-900 dark:text-white">
        <p className="text-3xl">
          Edit <code className="font-mono bg-gray-400 dark:bg-gray-700">src/App.tsx</code> and save to reload.
        </p>

        <p>
          View sample{' '}
          <Link className="text-purple-600 hover:underline" to="/connect">
            Connect App
          </Link>
        </p>

        <ProfileCard />

        <Links />
      </header>
    </div>
  )
}

export default Home
