// Create custom locale based on en-US, to display relative dates without times
import { formatDistanceToNow, parseISO, formatRelative } from 'date-fns'
import formatDistance from 'date-fns/locale/en-US/_lib/formatDistance/index.js'
import formatLong from 'date-fns/locale/en-US/_lib/formatLong/index.js'
import localize from 'date-fns/locale/en-US/_lib/localize/index.js'
import match from 'date-fns/locale/en-US/_lib/match/index.js'

export type RelativeTimeTokens =
  | 'lastWeek'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'nextWeek'
  | 'other'

// Get the default en-US locale to be added to
const defaultLocale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  localize: localize,
  match: match,
  options: { weekStartsOn: 1 },
}

// Relative date formatter without time
const formatRelativeWithoutTime = (token: RelativeTimeTokens) => {
  const formatRelativeLocale = {
    lastWeek: "eeee',' MMMM do", // Tuesday, February 9th
    yesterday: "'Yesterday'",
    today: "'Today'",
    tomorrow: "'Tomorrow'",
    nextWeek: "eeee',' MMMM do", // Tuesday, February 9th
    other: "M'/'d'/'yy'", // 1/1/21
  }
  return formatRelativeLocale[token]
}

export const friendlyDate = (date: string): string | null => {
  if (!date) return null

  return formatRelative(parseISO(date), new Date(), {
    locale: {
      ...defaultLocale,
      formatRelative: formatRelativeWithoutTime,
    } as Locale,
  })
}

export const timeDifference = (date: string): string => {
  return formatDistanceToNow(parseISO(date), { addSuffix: true })
}

// export const getLineItems = (item: any) => {
//   return (
//     item.lineItems &&
//     item.lineItems.slice().sort((a, b) => {
//       const dateA = new Date(a.completedAt).getTime()
//       const dateB = new Date(b.completedAt).getTime()
//       return dateA > dateB ? 1 : -1
//     })
//   )
// }
