import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'
import React from 'react'

const memoStyles = cva(
  'flex flex-col w-80 h-80 rounded-lg p-3 drop-shadow-md',
  {
    variants: {
      color: {
        pink: 'bg-memo-pink text-memo-pink-text',
        blue: 'bg-conblue-50 text-conblue-900',
      },
    },
    defaultVariants: {
      color: 'pink',
    },
  },
)

interface LandingMemoProps extends VariantProps<typeof memoStyles> {
  children?: React.ReactNode
  classname?: string
}

const LandingMemo = ({ children, color, classname }: LandingMemoProps) => {
  return (
    <div className={cn(memoStyles({ color }), classname)}>
      <div className="flex justify-between">
        <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
        <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
      </div>
      <div className="grow px-4 my-0.5">{children}</div>
      <div className="flex justify-between">
        <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
        <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
      </div>
    </div>
  )
}

export default LandingMemo
