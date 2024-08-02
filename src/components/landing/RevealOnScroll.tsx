'use client'

import { useEffect, useRef, useState } from 'react'

export default function RevealOnScroll({
  children,
  classNames = '',
}: {
  children: React.ReactNode
  classNames?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        scrollObserver.unobserve(entry.target)
      }
    })

    if (ref.current) {
      scrollObserver.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current)
      }
    }
  }, [])

  const classes = `transition-opacity duration-1000 
      ${isVisible ? 'opacity-100' : 'opacity-0'} ${classNames}`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
