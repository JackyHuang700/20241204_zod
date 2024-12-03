'use client'
import React, { useEffect, useState } from 'react'

import UserList from '@/app/components/userList/Index'
import AddUser from '@/app/components/addUser/Index'


export type ObjArrUser = {
  id: string | null
  name: string
  age: string
  email: string
}

const User = () => {

  const [objArrUser, setObjArrUser] = useState<null | Array<ObjArrUser>>(null);

  const setAddDemoUser = () => {
    setObjArrUser(_prev => {

      return [
        ...(_prev === null ? [] : _prev),
        {
          id: crypto.randomUUID(),
          name: 'test',
          age: '21',
          email: 'test@gamil.com'
        }
      ]
    })
  }

  useEffect(() => {
    setAddDemoUser()
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[560px] text-center'>
        <AddUser
          setObjArrUser={setObjArrUser}
        />
        <UserList
          objArrUser={objArrUser}
          setObjArrUser={setObjArrUser}
        />
      </div>
    </div>
  )
}

export default User
