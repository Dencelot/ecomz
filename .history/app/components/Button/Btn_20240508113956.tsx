'use client'
import React, { useState } from 'react'
import { DemoModal } from '../DemoModal/DemoModal'
import { createPortal } from 'react-dom'
import { useAppDispatch } from '@/app/app/hooks'
import { addModals } from '@/app/features/counter/chatKitSlice'

const Btn = ({
  text,
  classNames,
  children,
  isDemo,
}: {
  children?: React.ReactNode
  text?: string
  classNames: string
  isDemo?: boolean
}) => {
  const dispatch = useAppDispatch()
  const openPopup = () => {
    dispatch(addModals({contacts:false,demo:{open:true,isDemo:isDemo ?? false}}))
  }
  return (
    <>
      <button onClick={openPopup} className={classNames}>
        {text ?? children}
      </button>
    </>
  )
}

export default Btn
