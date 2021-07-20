import axios from 'axios'
import React, { useState } from 'react'
import { Button, Image, Spinner } from 'react-bootstrap'


interface IPhotoProps {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>
}

const Photo: React.FunctionComponent<IPhotoProps> = (props) => {
  const [fetching, setFetching] = useState(false)

  let url = `https://picsum.photos/id/${props.id}/800/400`

  function handleOnClick() {
    setFetching(true)
    let rd = Math.floor(Math.random() * 1000)
    console.log(`rd: ${rd}`)
    axios.get(`https://picsum.photos/id/${rd}/800/400`)
      .then(() => {
        props.setId(rd)
        setFetching(false)
      })
      .catch(() => handleOnClick())
  }

  return (
    <>
      <Button disabled={fetching} variant='primary' onClick={() => handleOnClick()}>Random photo</Button>
      <fieldset>
        {fetching
          ? <Spinner animation='border' variant='success' />
          : <Image src={url} width='100%' className='mb-2 mt-2 rounded-2' />}
      </fieldset>
      <Button type='submit' variant='success'>Submit</Button>
    </>
  )
}

export default Photo