import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'


interface IBgSlideProps {
}

const BgSlide: React.FunctionComponent<IBgSlideProps> = (props) => {
  const img: Array<object> = useSelector((state: any) => state.img)
  return (
    <Carousel fade>
      {img.map((ele: any, index) => {
        const url = `https://picsum.photos/id/${ele.id}/800/400`
        return (
          <Carousel.Item key={ele.id}>
            <img
              className="d-block w-100"
              src={url}
              alt={ele.category}
            />
            <Carousel.Caption>
              <h3>{index}</h3>
              <p>{ele.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel >
  )
}

export default BgSlide