import React from 'react'
import DeleteButton from './DeleteButton'

const BoardListItem = () => {
  return (
    <div className="w-boardlistitem h-boardlistitem p-6 rounded-xl bg-gradient-to-br from-lola-100 to-conblue-100/70 drop-shadow-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <form>
          <input
            type="text"
            placeholder="Title"
            className="w-32 bg-transparent text-2xl text-conblue-800 placeholder:text-conblue-800 outline-none"
          />
        </form>
        <DeleteButton />
      </div>
      <form>
        <input
          type="text"
          placeholder="보드 설명"
          className="w-full h-full bg-transparent text-xl text-conblue-700/60 placeholder:text-conblue-700/60 outline-none"
        />
      </form>
      <p></p>
    </div>
  )
}

export default BoardListItem
