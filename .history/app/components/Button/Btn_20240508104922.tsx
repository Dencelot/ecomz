'use client'
import React, { useState } from 'react'
import { DemoModal } from '../DemoModal/DemoModal'
import { createPortal } from 'react-dom'

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
  const [opened, setOpened] = useState(false)

  const openPopup = () => {
    setOpened(true)
  }
  return (
    <>
      <button onClick={openPopup} className={classNames}>
        {text ?? children}
      </button>
      {opened && createPortal(<DemoModal setOpened={setOpened} isDemo={isDemo} />, document.body)}
    </>
  )
}

export default Btn
