import { Comments } from '@/types'
import React, { FunctionComponent } from 'react'

interface Props {
  item: Comments
}

const Comment: FunctionComponent<Props> = ({ item }) => {
  return (
    <div className="flex gap-2">
      <div className="w-[30px] h-[30px] border rounded-full overflow-hidden border-gray-200">
        <img
          src="https://res.cloudinary.com/djyp9rr7s/image/upload/f_auto,q_auto/mmacraq3x7umh1yi9j4e"
          alt="profile pic"
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className="text-md font-semibold text-gray-900">{item.name}</h2>
        <div className="border border-gray-100 rounded-lg max-w-[400px] p-4 shadow-card">
          <p className="font-normal text-sm text-gray-600 text-left">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
