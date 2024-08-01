import React from 'react'

interface LayerProps {
  children: React.ReactNode
}

const layer = ({ children }: LayerProps) => {
  return (
    <div className="relative w-screen">
      <div className="absolute -left-16 top-16 w-[600px] h-[600px] rounded-full bg-lola-200 blur-3xl -z-10"></div>
      {children}
      <div className="absolute -right-16 top-[400px] w-[400px] h-[400px] rounded-full bg-conblue-100 blur-3xl -z-10"></div>
    </div>
  )
}

export default layer
