import React from 'react'

const BoardListItem = () => {
  return (
    <div className="w-boardlistitem h-boardlistitem p-6 rounded-xl bg-gradient-to-br from-lola-100 to-conblue-100/70 drop-shadow-md">
      <input
        type="text"
        placeholder="Board1"
        className="w-full bg-transparent placeholder:text-2xl placeholder:text-conblue-800"
      />
      <p></p>
    </div>
  )
}

export default BoardListItem
