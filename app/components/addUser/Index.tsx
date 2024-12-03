import React, { useState } from 'react'
import { z, ZodIssue } from 'zod'
import { ObjArrUser } from '@/app/components/user/Index'

import UserDataDemo from '@/app/components/userDataDemo/Index'
import AddUserError from '@/app/components/addUserError/Index'
import UserFields from '@/app/components/userFields/Index'

const schemaAddUser = z.object({
  id: z.string().min(1).nullable(),
  name: z.string().trim(),
  age: z.string().min(2, `字串必須至少包含 ${2} 個字符`).trim(),
  email: z.string().email(`email 格式錯誤`).trim()
})

type AddUserProps = {
  setObjArrUser: React.Dispatch<React.SetStateAction<ObjArrUser[] | null>>
}

const AddUser = ({
  setObjArrUser
}: AddUserProps) => {

  const [objUser, setObjUser] = useState<ObjArrUser>({
    id: null,
    name: '',
    age: '',
    email: ''
  });

  const [strArrAddUserError, setStrArrAddUserError] = useState<Array<ZodIssue> | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const _testError = false // debug mode
    const _schemaAddUser = schemaAddUser.safeParse({
      ...objUser,
      email: _testError ? 'test666' : objUser.email
    })
    if (_schemaAddUser.success === false) {
      setStrArrAddUserError(_schemaAddUser.error.issues)
      return
    }

    setObjArrUser(_prev => {
      return [
        ...(_prev || []),
        {
          ...objUser,
          id: crypto.randomUUID(),
        },
      ]
    })

    setResetUser()
    setResetStrArrAddUserError()
  }

  const onSetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _target = e.target as HTMLInputElement
    const _name = _target.name

    setObjUser(_prev => {
      return {
        ..._prev,
        [_name]: _target.value
      }
    })
  }

  const setResetUser = () => {
    setObjUser({
      id: null,
      name: '',
      age: '',
      email: ''
    })
  }

  const setResetStrArrAddUserError = () => setStrArrAddUserError(null)

  return (
    <div >
      <UserDataDemo objUser={objUser} />

      <form onSubmit={onSubmit}>
        <UserFields
          name='name'
          value={objUser.name}
          onSetUser={onSetUser}
          strArrAddUserError={strArrAddUserError}
        />

        <UserFields
          name='age'
          value={objUser.age}
          onSetUser={onSetUser}
          strArrAddUserError={strArrAddUserError}
        />
        <UserFields
          name='email'
          value={objUser.email}
          onSetUser={onSetUser}
          strArrAddUserError={strArrAddUserError}
        />
        <div className='text-center my-3'>
          <button type='submit' className='py-1.5 px-5 border border-solid border-white rounded-lg transition-all duration-300 hover:text-gray-400 hover:border-gray-500'>新增使用者</button>
        </div>
      </form>

      <AddUserError strArrAddUserError={strArrAddUserError} />
    </div>
  )
}

export default AddUser
