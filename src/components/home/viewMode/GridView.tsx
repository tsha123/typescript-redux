import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'


interface IGridViewProps {
}

const GridView: React.FunctionComponent<IGridViewProps> = (props) => {
  const filter = useSelector((state: any) => state.filter)
  let img: Array<object> = useSelector((state: any) => state.img)
  img = img.filter((ele: any) => filter[ele.category])
  
  return (
    <Row>
      {img.map((ele: any, index) => {
        const url = `https://picsum.photos/id/${ele.id}/400`
        return (
          <Card className='col-4' key={index}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title className='text-capitalize text-center'>{ele.title}</Card.Title>
            </Card.Body>
          </Card>
        )
      })}
    </Row >
  )
}

export default GridView