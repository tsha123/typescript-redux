import React, { useEffect, useState } from 'react'
import { Col, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Photo from './Photo';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch, useSelector } from 'react-redux';
import { actionImgAdd } from '../actions/img';

interface IFormMainProps {
}

const FormMain: React.FunctionComponent<IFormMainProps> = (props) => {

  const valid = {
    borderColor: '#28a745',
    borderWidth: 'thin'
  }

  const invalid = {
    borderColor: '#dc3545',
    borderWidth: 'medium'
  }

  const img = useSelector((state: any) => state.imgtrue)
  const [id, setId] = useState(Math.floor(Math.random() * 1000))
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(img);
  }, [img])

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: 'all' });
  const onSubmit = (data: any) => {
    console.log('Submit');
    setShow(true)
    dispatch(actionImgAdd(data))
  }
  console.log('Re-render');
  setValue('id', id)

  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <FloatingLabel label='Title' as={Col} sm={6} className='mb-1'>
        <Form.Control style={errors.title ? invalid : valid} placeholder="name@example.com"
          {...register("title", { required: true, maxLength: 81, minLength: 4 })} />
        {errors.title && <small className='text-danger'>* Độ dài tối thiểu 4 kí tự</small>}
      </FloatingLabel>
      <FloatingLabel label='Category' as={Col} sm={6} className='mb-1'>
        <Form.Select style={errors.category ? invalid : valid}
          {...register("category", { required: true, min: 1 })} >
          <option value="0">Select one...</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
          <option value="Nature">Nature</option>
          <option value="Animals">Animals</option>
          <option value="Styles">Styles</option>
        </Form.Select>
        {errors.category && <small className='text-danger'>* Vui lòng chọn </small>}
      </FloatingLabel>
      <Form.Group as={Col} sm={6}>
        <Photo id={id} setId={setId} {...register("id", { required: true, min: 0 })} />
      </Form.Group>
      <ToastContainer position='top-end' className='m-5'>
        <Toast bg='success' show={show} autohide delay={3000} onClose={() => setShow(false)}>
          <Toast.Header>
            <strong className="me-auto">Thành công</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body className='text-white'>Add photo success.</Toast.Body>
        </Toast>
      </ToastContainer>
    </Form >
  )
}

export default FormMain