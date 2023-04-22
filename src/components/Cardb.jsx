import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Cardb = ({ image, name, fill, price }) => {
    const {pizza} = useContext(Context)
    const navigate = useNavigate()
    const [id,setID] = useState("")
    const irAPizza = () => {
        navigate(`/Pizza/${id}`)
    }
   
    
    
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='border-bottom p-2'><h3><b>{name}</b></h3></Card.Title>
                    <Card.Text className='border-bottom p-2'>
                        <p className='ing'><b>ingredientes:</b></p>{fill}
                    </Card.Text>
                    <Card.Text className='border-bottom p-2'>
                        <h3><b>${price}</b></h3>
                    </Card.Text>
                    <div className='d-flex mx-1'>
                    <Button onClick={(e) => console.log(e.currentTarget.attributes)}  variant="primary" className='mx-2 bg-info border border-0'>Ver más 👀</Button>
                    <Button variant="primary" className='mx-2 bg-danger border border-0'>Añadir 🛒</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cardb
