import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) => {
    return(
        <Link href={href} className="mr-6">
            {title}
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-4 py-2 font-medium flex items-center justify-between bg-dark text-light'>
        <div className='flex items-center'>
            <Logo />
            <nav>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/community" title="Community" />
                <CustomLink href="/library" title="Library" />
                <CustomLink href="/about" title="About" /> 
            </nav>
        </div>

        <nav>
            <CustomLink href="/help" title="Help" />
            <CustomLink href="/user" title="User" />
        </nav>
    </header>
  )
}

export default NavBar