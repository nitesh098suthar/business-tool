'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const HeaderTwo = () => {
  const signInHandler = () => {
    signIn('google', { callbackUrl: '/homeffgf' })
}
  return (
    <div className='' onClick={signInHandler}>HeaderTwo</div>
  )
}

export default HeaderTwo