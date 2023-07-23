'use client'
import { deleteUsersQueryFn, getUsersQueryFn } from '@/queryFns/postsQueryFns'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Search from '../Search'
import { debounce } from 'lodash'
import { User } from '@/types'
import { Trash } from '../Icons'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { deleteUserDatas, setUsersDatas } from '@/redux/feature/users-slice'

const Users: FunctionComponent = () => {
  const [search, setSearch] = useState<string>('')

  const [deleteId, setDeleteId] = useState<number>()

  const dispatch = useDispatch<AppDispatch>()
  const users = useAppSelector((state) => state.usersReducer.users)

  const { data, isLoading, refetch } = useQuery<User[]>({
    queryKey: ['users', search],
    queryFn: () => getUsersQueryFn(search),
    onSuccess: (data) => {
      dispatch(setUsersDatas(data))
    },
  })

  const getDatas = debounce(async (search: string) => {
    await setSearch(search)
    refetch()
  }, 500)

  // delete
  const deleteUser = useMutation({
    mutationFn: (id: number) => {
      return deleteUsersQueryFn(id)
    },
    onSuccess: () => {
      dispatch(deleteUserDatas(deleteId as number))
    },
  })
  const handleDelete = (id: number) => {
    setDeleteId(id)
    deleteUser.mutate(id)
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Search handleChange={(e) => getDatas(e)} />
      {users?.map((item, i) => (
        <div
          key={i}
          className="w-full border border-gray-100 shadow-card p-4 rounded-lg flex flex-col gap-2"
        >
          <span className="text-sm text-gray-900">{item.name}</span>
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">{item.status}</span>
            <button
              className="text-blue-400 text-xs  w-[25px] h-[25px] flex justify-center items-center border border-none rounded-full hover:bg-blue-50 transition-all duration-300 ease-in-out"
              onClick={() => handleDelete(item.id)}
              disabled={deleteUser.isLoading}
            >
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
