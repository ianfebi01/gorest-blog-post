'use client'

import React from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'

import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const page = useAppSelector((state) => state.layoutReducer.page)

  const router = useRouter()
  const pathName = usePathname()

  const handleChangePage = (page: string) => {
    router.push(page)

    // dispatch(setPage(page))
  }
  return (
    <div className="w-full text-sm h-[60px] flex justify-center items-center shadow-card fixed top-0 bg-white gap-4">
      <button
        className={`cursor-pointer ${
          pathName === '/' ? 'text-gray-900' : 'text-gray-400'
        }`}
        onClick={() => handleChangePage('/')}
      >
        Posts
      </button>
      <button
        className={`cursor-pointer ${
          pathName === '/user' ? 'text-gray-900' : 'text-gray-400'
        }`}
        onClick={() => handleChangePage('/user')}
      >
        User
      </button>
    </div>
  )
}

export default Navbar
