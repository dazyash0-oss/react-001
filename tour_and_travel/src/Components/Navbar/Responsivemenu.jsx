import React from 'react'

const Responsivemenu = ({showMenu , setShowMenu}) => {
  return (
    <div className={` ${showMenu ? 'right-0 ' : '-right-[100%]'}  fixed  bottom-0 top-0 x-20 flex h-screen w-[75%] flex-col justify-between  bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md ` }>
      hi
    </div>
  )
}

export default Responsivemenu