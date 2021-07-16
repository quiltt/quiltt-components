export default {
  listGroup: {
    base: 'min-w-0 bg-transparent text-dark dark:bg-gray-800 dark:text-light',
    default: 'rounded-lg ring-1 ring-black ring-opacity-5',
    flush: 'w-full rounded-none',
  },
  listGroupItem: {
    base: 'flex flex-col p-4 border-b border-black border-opacity-5 first:rounded-t-lg last:rounded-b-lg',
    disabled: 'opacity-75 pointer-events-none',
    default: 'bg-transparent text-dark dark:bg-gray-800 dark:text-light',
    primary:
      'bg-primary-100 text-primary-600 dark:bg-primary-700 dark:text-primary-300',
    secondary:
      'bg-secondary-100 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-300',
    success:
      'bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-300',
    danger: 'bg-red-100 text-red-600 dark:bg-red-700 dark:text-red-300',
    warning:
      'bg-yellow-100 text-yellow-600 dark:bg-yellow-700 dark:text-yellow-300',
    dark: 'text-dark',
    light: 'text-light',
  },
}
