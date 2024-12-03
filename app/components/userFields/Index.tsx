import React from 'react'
import styles from '@/app/components/addUser/addUser.module.css'
import { ZodIssue } from 'zod'

type UserFieldsProps = {
  name: string
  value: string | number
  onSetUser: (e: React.ChangeEvent<HTMLInputElement>) => void
  strArrAddUserError: Array<ZodIssue> | null
}

const UserFields = ({
  name,
  value,
  onSetUser,
  strArrAddUserError
}: UserFieldsProps) => {
  return (
    <div className='my-2 overflow-hidden'>
      <input type='text' name={name} value={value} placeholder={name} onChange={onSetUser} className={`${styles['input-style']} w-full`} />
      <span className='text-red-500'>{strArrAddUserError && JSON.stringify(strArrAddUserError.find(c => c.path.includes(name)))}</span>
    </div>
  )
}

export default UserFields
