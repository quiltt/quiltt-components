/* eslint-disable no-console */
/**
 * Helper function to show warning in the console during development
 * @param {expression} assert - assertion to test
 * @param {string} scope - location of the warning, usually a component
 * @param {string} message - instructions about the warning
 */
const warn = (assert: boolean, scope: string, message: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    if (assert) {
      if (console.warn) {
        console.warn(`Quiltt [${scope}]: ${message}`)
      } else {
        console.log(`Quiltt [${scope}]: ${message}`)
      }
    }
  }
}

export default warn
