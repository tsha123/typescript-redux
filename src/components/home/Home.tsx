import React from 'react'
import FormAdd from './add/FormAdd'
import View from './viewMode/View'


interface IMainProps {
}

const Home: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div className='d-flex'>
      <FormAdd />
      <View />
    </div>
  )
}

export default Home