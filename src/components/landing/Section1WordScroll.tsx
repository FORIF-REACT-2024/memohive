'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const words = ['마음', '메모', '한마디', '현재', '미래']
const animation = [
  [1, 0.5, 0.2, 0, 0],
  [0.5, 1, 0.5, 0.2, 0],
  [0.2, 0.5, 1, 0.5, 0.2],
  [0, 0.2, 0.5, 1, 0.5],
  [0, 0, 0.2, 0.5, 1],
]

export default function Section1WordScroll() {
  const wordsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const element = wordsRef.current
      if (element) {
        const tl = gsap.timeline({
          repeat: -1,
          delay: 1,
          defaults: { ease: 'power1.inOut' },
        })

        tl.to('.box', {
          duration: 0,
          y: '40%',
        })

        animation[0].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 0,
              opacity: animation[0][index],
            },
            '<',
          )
        })

        tl.to('.box', {
          delay: 0.2,
          duration: 1,
          y: '20%',
        })

        animation[1].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 1,
              opacity: animation[1][index],
            },
            '<',
          )
        })

        tl.to('.box', {
          duration: 1,
          y: '0%',
        })

        animation[2].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 1,
              opacity: animation[2][index],
            },
            '<',
          )
        })

        tl.to('.box', {
          duration: 1,
          y: '-20%',
        })

        animation[3].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 1,
              opacity: animation[3][index],
            },
            '<',
          )
        })

        tl.to('.box', {
          duration: 1,
          y: '-40%',
        })

        animation[4].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 1,
              opacity: animation[4][index],
            },
            '<',
          )
        })

        tl.to('.box', {
          duration: 1,
          y: '40%',
        })

        animation[3].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 0.2,
              opacity: animation[3][index],
            },
            index === 0 ? '<0.2' : '<',
          )
        })

        animation[2].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 0.2,
              opacity: animation[2][index],
            },
            index === 0 ? '>' : '<',
          )
        })

        animation[1].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 0.2,
              opacity: animation[1][index],
            },
            index === 0 ? '>' : '<',
          )
        })

        animation[0].forEach((num, index) => {
          tl.to(
            `.element${index}`,
            {
              duration: 0.2,
              opacity: animation[0][index],
            },
            index === 0 ? '>' : '<',
          )
        })
      }
    },
    { scope: wordsRef },
  )

  return (
    <div className="h-48 flex items-center justify-center">
      <div ref={wordsRef} className="flex flex-col">
        <div className="flex flex-col box">
          {words.map((word, index) => (
            <div key={index} className={`${`element${index}`} text-5xl py-2`}>
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
