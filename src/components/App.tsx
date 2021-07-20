import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import BgSlide from './BgSlide'
import FormMain from './FormMain'
import Header from './Header'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home'><FormMain /></Route>
        <Route exact path='/content'><BgSlide/></Route>
      </Container>
    </BrowserRouter>
      )
}

      export default App