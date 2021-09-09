import * as React from 'react'

type SectionProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <section className="p-8 even:">
      {title || description ? (
        <header className="inline-flex items-end pb-1 mb-5 border-b-2 border-dashed">
          {title && (
            <h2 className="inline-block p-1 font-mono text-xl font-medium bg-gray-100 rounded">
              {title}
            </h2>
          )}
          {description && <span className="ml-4 text-base font-medium">{description}</span>}
        </header>
      ) : null}
      {children}
    </section>
  )
}

export default Section
