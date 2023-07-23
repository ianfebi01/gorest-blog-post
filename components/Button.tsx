import React, { FunctionComponent } from 'react'

interface Props {
  children: React.ReactNode
}
const Button: FunctionComponent<Props> = ({ children }) => {
  return (
    <button className="h-[44px] flex items-center justify-center px-4 bg-blue-600 text-white border border-none rounded-lg">
      {children}
    </button>
  )
}

export default Button
