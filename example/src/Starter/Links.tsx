import * as React from 'react'

export const Links: React.FC = () => {
  return (
    <ul className="mt-8">
      <li>
        <h3 className="text-4xl">Documentation</h3>
      </li>
      <li>
        <Link href="https://tailwindcss.com/docs">Tailwind CSS</Link>
      </li>
      <li>
        <Link href="https://www.typescriptlang.org/docs/">Typescript</Link>
      </li>
      <li>
        <Link href="https://reactjs.org">React</Link>
      </li>
      <li>
        <Link href="https://graphql.org/learn/">GraphQL</Link>
      </li>
      <li>
        <Link href="https://www.apollographql.com/docs/react/">Apollo</Link>
      </li>
      <li>
        <Link href="https://postman.quiltt.io/">Quiltt</Link>
      </li>
    </ul>
  )
}

export type LinkProps = {
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a className="text-2xl text-purple-600 hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Links
