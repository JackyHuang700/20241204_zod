import React from 'react'
import { ObjArrUser } from '@/app/components/user/Index'

type UserDataDemoProps = {
  objUser: ObjArrUser
}

const UserDataDemo = ({
  objUser
}: UserDataDemoProps) => {
  return (
    <>
      {
        objUser && <div>
          <span>Demo: </span>
          <span>{JSON.stringify(objUser)}</span>
        </div>
      }
    </>
  )
}

export default UserDataDemo
