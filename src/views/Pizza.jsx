import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'


const Pizza = () => {
  const {id} = useParams()
const {pizza} = useContext(Context)

  return (
    <div>
      {id}
    </div>
  )
}

export default Pizza
