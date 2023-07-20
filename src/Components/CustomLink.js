import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomLink({ to, id ,children, ...other }) {
  const navigate = useNavigate()

  const Redirect = (to, id) => {
    navigate(to)
    if (id){
        setTimeout(() => {
            window.location.hash = id;
          }, 100)
    }
  }

  return (
    <>
      <a {...other} onClick={() => Redirect(to, id)}>
        {children}
      </a>
    </>
  )
}
