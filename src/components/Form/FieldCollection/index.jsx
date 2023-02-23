import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { getInputsData } from '../utils'
import Input from './components/Field'

const FieldCollection = ({ currentTab }) => {
  const inputsData = getInputsData(currentTab)

  const { reset } = useFormContext()

  useEffect(() => {
    reset(inputsData.reduce((acc, input) => {
      acc[input.name] = input.defaultValue

      return acc
    }, {}))
  }, [currentTab])

  return inputsData.map((input, index) => (
    <Input
      key={index}
      currentTab={currentTab}
      {...input}
    />
  ))
}

export default FieldCollection
