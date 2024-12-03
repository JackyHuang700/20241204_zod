import React from 'react'
import { ZodIssue } from 'zod'

type AddUserErrorProps = {
  strArrAddUserError: Array<ZodIssue> | null
}

const AddUserError = ({
  strArrAddUserError
}: AddUserErrorProps) => {
  return (
    <>
      {
        strArrAddUserError && (<div className='my-2'>{
          strArrAddUserError.map((_error) => {
            return (
              <div key={_error.message} className='block'>
                <span className='text-red-500'>{_error.message}</span>
              </div>
            )

          })
        }</div>)
      }</>
  )
}

export default AddUserError
