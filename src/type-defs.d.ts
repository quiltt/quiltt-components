declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module 'date-fns/locale/en-US/_lib/formatDistance/index.js'

declare module 'date-fns/locale/en-US/_lib/formatLong/index.js'

declare module 'date-fns/locale/en-US/_lib/localize/index.js'

declare module 'date-fns/locale/en-US/_lib/match/index.js'
