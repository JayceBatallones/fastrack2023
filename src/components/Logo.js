import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-center pr-8">
        <Link href='/' 
        className='w-28 h-12  flex items-center justify-center rounded text-2xl'
        >
            THREEDY
        </Link>
    </div>
  )
}

export default Logo