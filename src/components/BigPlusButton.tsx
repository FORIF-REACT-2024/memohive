import React from 'react'

const BigPlusButton = () => {
  return (
    <div className="w-boardlistitem h-boardlistitem flex justify-center items-center">
      <button className="w-20 h-20 p-3 rounded-full bg-button-gray hover:bg-button-gray-hover">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute w-full h-2 rounded-full bg-white"></div>
          <div className="w-full h-2 rounded-full bg-white rotate-90 z-10"></div>
        </div>
      </button>
    </div>
  )
}

export default BigPlusButton
