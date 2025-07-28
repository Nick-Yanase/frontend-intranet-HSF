import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-24 flex justify-center items-center bg-zinc-900 mb-10'>
      <nav className="w-full max-w-7xl flex justify-between items-center">
        <p className=' text-xl text-zinc-500 font-bold'>HSF</p>
        <div className='flex items-center gap-4'>
          <Link href={"/convenios"} className='text-zinc-400'>Convenios</Link>
        </div>
      </nav>
    </footer>
  )
}
