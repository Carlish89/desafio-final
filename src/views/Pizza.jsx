import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

const {id} = useParams()
const {pizza} = useContext(Context)

const Pizza = () => {
  return (
    <div>
      {id}
    </div>
  )
}

export default Pizza
