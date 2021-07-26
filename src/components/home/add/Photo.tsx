import React, { useState } from 'react'
import { Button, Image, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import getRandomId from '../../../utils/randomID'

interface IPhotoProps {
  setId: React.Dispatch<React.SetStateAction<number>>
}

const Photo: React.FunctionComponent<IPhotoProps> = (props) => {
  console.log('Render Photo')

  const img = useSelector((state: any) => state.img)
  let listId = img.map((ele: any) => ele.id)
  const [state, setState] = useState({ id: 0, fetching: false })
  let url = `https://picsum.photos/id/${state.id}/400`

  const getRandomImg = () => {
    setState({ id: state.id, fetching: true })
    getRandomId(listId)
      .then(res => setState({ id: res, fetching: false }))
  }

  return (
    <>
      <Button disabled={state.fetching} variant='primary' onClick={() => getRandomImg()}>Random photo</Button>
      <fieldset>
        {state.fetching
          ? <Spinner animation='border' variant='success' />
          : <Image src={url} width='50%' className='mb-2 mt-2 rounded-2' />}
      </fieldset>
      <Button type='submit' variant='success'
        onClick={() => { props.setId(state.id); getRandomImg() }}>Submit</Button>
    </>
  )
}

export default Photo