export default {
  formGroup: {
    base: 'mb-4',
  },
  label: {
    base: 'font-medium block text-sm text-gray-700 dark:text-gray-400',
    // check and radio get this same style
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  inputGroup: {
    base: 'mb-4 flex w-full',
    prepend:
      'h-full p-2 flex items-center self-center bg-gray-200 rounded-l-lg border',
    append:
      'h-full p-2 flex items-center self-center bg-gray-200 rounded-r-lg border',
  },
  input: {
    sm: 'h-8 block w-full text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-sm',
    base: 'h-10 block w-full text-base focus:outline-none dark:text-gray-300 leading-5 rounded-md',
    lg: 'h-12 block w-full text-lg focus:outline-none dark:text-gray-300 leading-5 rounded-lg',
    active:
      'focus:border-primary-400 border-gray-300 dark:border-gray-600 focus:ring focus:ring-primary-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200',
    radio:
      'text-primary-600 form-radio focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0 dark:focus:ring-gray-300',
    checkbox:
      'text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-0 rounded dark:focus:ring-gray-300',
  },
  textarea: {
    base: 'block w-full text-sm dark:text-gray-300 rounded-md focus:outline-none',
    active:
      'focus:border-primary-400 border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-primary-300',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200',
  },
  // Select
  select: {
    base: 'block w-full text-sm dark:text-gray-300 focus:outline-none rounded-md',
    active:
      'focus:border-primary-400 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring focus:ring-primary-300 dark:focus:ring-gray-300 dark:focus:border-gray-600',
    select: 'leading-5',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid:
      'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200',
    invalid:
      'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200',
  },
  feedback: {
    base: 'text-sm leading-none mt-1',
    valid: 'text-green-600',
    invalid: 'text-red-600',
  },
}
