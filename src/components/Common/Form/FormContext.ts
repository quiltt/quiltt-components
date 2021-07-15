import * as React from 'react'

interface FormContextType {
  controlId?: string
}

const FormContext = React.createContext<FormContextType>({})

export default FormContext
