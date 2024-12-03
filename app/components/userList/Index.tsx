import React from 'react'
import { ObjArrUser } from '@/app/components/user/Index'
import styles from '@/app/components/userList/userList.module.css'

type UserListProps = {
  objArrUser: null | Array<ObjArrUser>
  setObjArrUser: React.Dispatch<React.SetStateAction<null | Array<ObjArrUser>>>
}


const UserList = ({
  objArrUser,
  setObjArrUser
}: UserListProps) => {


  const onDeleteUser = (id: ObjArrUser['id']) => {
    const _objArrUser = objArrUser?.filter((_user) => _user.id !== id) || []
    setObjArrUser(_objArrUser)
  }

  return (
    <ul>
      {
        objArrUser?.map((_user) => {
          return (
            <li key={_user.id} className='bg-zinc-900 rounded-lg p-2.5 text-zinc-300 text-left flex gap-3 mb-3 overflow-auto'>
              <div className='flex-1 basis-auto'>
                <p>
                  <span className={styles.title}>ID:</span>
                  <span>{_user.id}</span>
                </p>
                <p>
                  <span className={styles.title}>Name:</span>
                  <span>{_user.name}</span>
                </p>
                <p>
                  <span className={styles.title}>age:</span>
                  <span>{_user.age}</span>
                </p>
                <p>
                  <span className={styles.title}>email:</span>
                  <span>{_user.email}</span>
                </p>
              </div>
              <div className='flex-1 basis-auto min-w-[100px] flex justify-end items-center'>
                <button onClick={() => onDeleteUser(_user.id)} className='border-2 border-solid border-red-500 text-red-400 p-2 rounded-xl transition-all duration-300 hover:bg-red-900 hover:text-white'>刪除使用者</button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default UserList