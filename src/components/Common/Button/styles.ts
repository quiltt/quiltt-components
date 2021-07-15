export default {
  base: 'align-bottom inline-flex items-center justify-center cursor-pointer leading-none transition-colors duration-150 font-medium focus:outline-none',
  block: 'w-full',
  size: {
    xl: 'px-10 py-5 rounded-lg text-xl',
    lg: 'px-5 py-4 rounded-lg text-xl',
    base: 'px-4 py-3 rounded-lg text-lg',
    sm: 'px-3 py-2 rounded-md text-sm',
    icon: {
      xl: 'p-4 rounded-lg',
      lg: 'p-3 rounded-lg',
      base: 'p-2 rounded-lg',
      sm: 'p-2 rounded-md',
    },
    pagination: 'px-3 py-2 rounded-md text-sm',
  },
  // styles applied to the SVG icon
  icon: {
    xl: 'h-6 w-6',
    lg: 'h-5 w-5',
    base: 'h-5 w-5',
    sm: 'h-4 w-4',
    left: 'mr-2 -ml-1',
    right: 'ml-2 -mr-1',
  },
  variants: {
    solid: {
      primary: {
        base: 'text-white bg-primary-500 border border-transparent',
        active:
          'active:bg-primary-600 hover:bg-primary-600 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      secondary: {
        base: 'text-white bg-secondary-500 border border-transparent',
        active:
          'active:bg-secondary-600 hover:bg-secondary-600 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      light: {
        base: 'text-dark bg-light border border-transparent',
        active:
          'active:bg-gray-300 hover:bg-gray-300 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      dark: {
        base: 'text-light bg-dark border border-transparent',
        active:
          'active:bg-gray-600 hover:bg-gray-600 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      danger: {
        base: 'text-white bg-red-600 border border-transparent',
        active:
          'active:bg-red-800 hover:bg-red-800 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      success: {
        base: 'text-white bg-green-600 border border-transparent',
        active:
          'active:bg-green-800 hover:bg-green-800 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      warning: {
        base: 'text-dark bg-yellow-600 border border-transparent',
        active:
          'active:bg-yellow-800 hover:bg-yellow-800 focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 cursor-not-allowed',
      },
    },
    outline: {
      primary: {
        base: 'text-primary bg-transparent border border-primary',
        active:
          'active:bg-primary active:text-white hover:bg-primary hover:text-white focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      secondary: {
        base: 'text-secondary bg-transaprent border border-secondary',
        active:
          'active:bg-secondary active:text-white hover:bg-secondary hover:text-white focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      light: {
        base: 'text-light bg-transaprent border border-light',
        active:
          'active:bg-light active:text-dark hover:bg-light hover:text-dark focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      dark: {
        base: 'text-dark bg-transaprent border border-dark',
        active:
          'active:bg-dark active:text-light hover:bg-dark hover:text-light focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      danger: {
        base: 'text-red-600 bg-transaprent border border-red-600',
        active:
          'active:bg-red-600 active:text-white hover:bg-red-600 hover:text-white focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      success: {
        base: 'text-yellow-600 bg-transaprent border border-yellow-600',
        active:
          'active:bg-yellow-600 active:text-white hover:bg-yellow-600 hover:text-white focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
      warning: {
        base: 'text-red-600 bg-transaprent border border-red-600',
        active:
          'active:bg-red-600 active:text-white hover:bg-red-600 hover:text-white focus:ring focus:ring-gray-400',
        disabled: 'opacity-75 bg-gray-50 cursor-not-allowed',
      },
    },
    link: {
      primary: {
        base: 'text-primary bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      secondary: {
        base: 'text-secondary bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      light: {
        base: 'text-light bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:text-gray-300 hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      dark: {
        base: 'text-dark bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      danger: {
        base: 'text-red-600 bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      success: {
        base: 'text-green-600 bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      warning: {
        base: 'text-yellow-600 bg-transparent focus:outline-none border border-transparent',
        active:
          'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:bg-opacity-10',
        disabled: 'opacity-75 cursor-not-allowed',
      },
    },
  },
  // this is the button that lives inside the DropdownItem
  dropdownItem: {
    base: 'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
  },
}
