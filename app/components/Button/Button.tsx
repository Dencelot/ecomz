import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full lg:w-[240px] bg-[var(--white-100)] text-lg py-5 rounded-2xl hover:bg-[var(--white-08)] transition-all ${className}`}
    />
  )
}
