export default {
  base: 'bg-primary relative inline-flex flex-shrink-0 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
  checked: 'opacity-100 hover:opacity-90',
  unchecked: 'opacity-50 hover:opacity-75',
  size: {
    base: 'h-6 w-12',
    sm: 'h-4 w-8',
    lg: 'h-8 w-16',
  },
  switch: {
    base: 'border bg-white rounded-full shadow-sm transform-gpu transition-translate duration-150',
    size: {
      base: 'h-6 w-6',
      sm: 'h-4 w-4',
      lg: 'h-8 w-8',
    },
    translate: {
      base: 'translate-x-6',
      sm: 'translate-x-4',
      lg: 'translate-x-8',
    },
  },
}
