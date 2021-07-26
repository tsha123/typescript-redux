import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'


interface IListViewProps {
}

const ListView: React.FunctionComponent<IListViewProps> = (props) => {
  const img: Array<object> = useSelector((state: any) => state.img)
  return (
    <Row>
      {img.map((ele: any, index) => {
        const url = `https://picsum.photos/id/${ele.id}/400`
        return (
          <Card key={index}>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <Card.Title className='text-capitalize text-center'>{ele.title}</Card.Title>
              <Card.Img src={url} style={{ width: '20%' }} />
            </Card.Body>
          </Card>
        )
      })}
    </Row >
  )
}

export default ListView