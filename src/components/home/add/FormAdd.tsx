import React, { useState } from 'react'
import { Form, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from 'react-redux';
import { actionImgAdd } from '../../../actions/img';
import Photo from './Photo';

interface IFormMainProps {
}

const FormAdd: React.FunctionComponent<IFormMainProps> = (props) => {

  const valid = {
    borderColor: '#28a745',
    borderWidth: 'thin'
  }

  const invalid = {
    borderColor: '#dc3545',
    borderWidth: 'medium'
  }

  const [id, setId] = useState(0)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: 'all' });
  setValue('id', id)

  const onSubmit = (data: any) => {
    dispatch(actionImgAdd(data))
    console.log('Submitted')
  }
  console.log('Render/Re-render')

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='col m-2'>
      <FloatingLabel label='Title' className='mb-1'>
        <Form.Control style={errors.title ? invalid : valid}
          // * validate form
          {...register("title", { required: true, maxLength: 81, minLength: 4 })} />
        {errors.title && <small className='text-danger'>* Min length 4 characters</small>}
      </FloatingLabel>
      <FloatingLabel label='Category' className='mb-1'>
        <Form.Select style={errors.category ? invalid : valid}
          {...register("category", { required: true, min: 1 })} >
          <option value="0">Select one...</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
          <option value="Nature">Nature</option>
          <option value="Animals">Animals</option>
          <option value="Styles">Styles</option>
        </Form.Select>
        {errors.category && <small className='text-danger'>* Please select one</small>}
      </FloatingLabel>
      <Form.Group>
        <Photo setId={setId} {...register("id", { required: true })} />
      </Form.Group>
    </Form >
  )
}

export default FormAdd