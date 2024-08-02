'use client'

import { useState } from 'react'

export default function Section4() {
  const [index, setIndex] = useState<number>(0)

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full mb-10 flex lg:flex-row gap-10 flex-col justify-center items-center">
        <div className="text-right">누구나 자신의 생각을</div>
        <div className="flex flex-row w-fit p-4 rounded-3xl gap-4 bg-gray-100">
          <button
            type="button"
            onClick={() => {
              setIndex(0)
            }}
            className={`px-14 py-6 rounded-xl ${index === 0 ? 'text-white bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-conblue-200 to-conblue-400' : 'text-gray-400'} inline-block transition-all duration-500`}
          >
            Type
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(1)
            }}
            className={`px-14 py-6 rounded-xl ${index === 1 ? 'text-white bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-lola-200 to-lola-400' : 'text-gray-400'} inline-block transition-all duration-500`}
          >
            Share
          </button>
        </div>
      </div>
      <div className="text-center">Memo 컴포넌트 추가되면 수정 예정</div>
    </div>
  )
}
