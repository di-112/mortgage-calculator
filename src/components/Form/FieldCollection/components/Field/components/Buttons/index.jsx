import React from 'react'
import { Radio } from 'antd'
import { useFormContext } from 'react-hook-form'
import { calculatePercent } from '../../../../../utils'

const Buttons = ({
  name,
  buttonsValue,
  defaultValue,
  dependenceField,
  buttonSymbol,
}) => {
  const { setValue, getValues } = useFormContext()

  const initialValue = dependenceField
    ? Math.ceil(defaultValue / (getValues(dependenceField) / 100))
    : defaultValue

  const onClickHandler = value => {
    setValue(name, dependenceField ? calculatePercent(getValues(dependenceField), value) : name)
  }

  if (!buttonsValue) return null

  return (
    <div>
      <Radio.Group
        defaultValue={initialValue}
        buttonStyle="solid"
      >
        {buttonsValue.map((value, index) => (
          <Radio.Button
            key={index}
            onClick={() => onClickHandler(value)}
            value={value}
          >
            {`${value} ${buttonSymbol}`}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  )
}

export default Buttons
