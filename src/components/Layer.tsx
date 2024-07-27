import React from 'react'

interface LayerProps {
  children: React.ReactNode
}

const layer = ({ children }: LayerProps) => {
  return (
    <div className="relative">
      <div className="absolute -left-16 top-16 w-[600px] h-[600px] rounded-full bg-radial-gradient from-lola-200 to-transparent -z-10"></div>
      {children}
      <div className="absolute -right-16 top-[400px] w-[400px] h-[400px] rounded-full bg-conblue-200 -z-10"></div>
    </div>
  )
}

export default layer
