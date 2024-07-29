import React from 'react'
import BigPlusButton from '@/components/BigPlusButton'
import BoardListItem from '@/components/BoardListItem'
import Layer from '@/components/Layer'

const BoardList = () => {
  return (
    <div className="absolute top-40 w-full max-w-boardlist mx-auto  flex flex-col gap-16">
      <h1 className="text-4xl text-conblue-800">Board List</h1>
      <div className="w-full h-full min-h-boardlist p-1 rounded-xl bg-gradient-to-br from-lola-200 to-conblue-200">
        <div className="w-full h-full p-10 rounded-xl bg-white flex justify-center items-center gap-10">
          <BigPlusButton />
          <BoardListItem />
        </div>
      </div>
    </div>
  )
}

export default BoardList
