import React, { useEffect, useState } from 'react'
import { Button, DropdownButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actionFilterCheck, actionFilterUnCheck } from '../../../actions/filter'


interface IFilterProps {
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {

  const filter: any = useSelector((state: any) => state.filter)
  const dispatch = useDispatch()
  const categories = ['Technology', 'Styles', 'Education', 'Nature', 'Animals']
  const [allCheck, setAllCheck] = useState(false)

  useEffect(() => {
    categories.every(ele => filter[ele])
      ? setAllCheck(true) : setAllCheck(false)
  }, [filter])

  const clickAllBtn = () => {
    setAllCheck(!allCheck)
    allCheck
      ? categories.forEach(ele => dispatch(actionFilterUnCheck(ele)))
      : categories.forEach(ele => dispatch(actionFilterCheck(ele)))
  }

  const handleCheck = (ele: string) => {
    filter[ele]
      ? dispatch(actionFilterUnCheck(ele))
      : dispatch(actionFilterCheck(ele))
  }

  return (
    <DropdownButton title align='end' variant='outline-secondary'>
      <div className='d-flex flex-wrap'>
        {/* Btn All */}
        <Button className='rounded-pill m-1'
          onClick={() => clickAllBtn()}
          variant={allCheck ? 'outline-primary' : 'outline-secondary'}>
          {allCheck &&
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2 " viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>}
          &nbsp;All
        </Button>

        {/* Categories */}
        {categories.map((ele, index) =>
          <Button className='rounded-pill m-1'
            onClick={() => handleCheck(ele)} key={index}
            variant={filter[ele] ? 'outline-primary' : 'outline-secondary'}>
            {filter[ele] &&
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2 " viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>}
            &nbsp;{ele}
          </Button>
        )}
      </div>
    </DropdownButton >
    // <Button onClick={() => dispatch(actionFilterCheck('a2'))}>{filter.a2}</Button>
  )
}

export default Filter