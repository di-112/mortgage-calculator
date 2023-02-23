import React, { useState } from 'react'
import { Spin } from 'antd'
import { FormProvider, useForm } from 'react-hook-form'
import Form from '../Form'
import Info from '../Info'
import style from './style.module.scss'
import Success from './components/Success'

const Calculator = ({ currentTab }) => {
  const [isSuccess, setSuccess] = useState(false)
  const [isFetching, setFetching] = useState(false)

  const formMethods = useForm({
    mode: 'onChange', shouldUnregister: true,
  })

  if (isFetching) {
    return (
      <div className={style.spin}>
        <Spin size="large" />
      </div>
    )
  }

  const propsForSuccess = { setSuccess, setFetching }

  const propsForForm = { setSuccess, setFetching, currentTab }

  return (
    <FormProvider {...formMethods}>
      <div className={style.calculator}>
        {isSuccess ? (<Success {...propsForSuccess} />) : (
          <>
            <Form {...propsForForm} />
            <Info />
          </>
        )}
      </div>
    </FormProvider>
  )
}

export default Calculator
