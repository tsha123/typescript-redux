import React from 'react'
import { DropdownButton, Form } from 'react-bootstrap'


interface IFilterProps {
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  return (
    <>
      <DropdownButton title align='end'>
        <Form.Check >
          <Form.Check.Input value='test' type='checkbox'
            onClick={(e: any) => console.log(e.target.value)} />
          <Form.Check.Label>Test</Form.Check.Label>
        </Form.Check>
      </DropdownButton>
    </>
  )
}

export default Filter