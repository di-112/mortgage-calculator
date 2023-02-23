import React from 'react'
import { Slider as AntSlider } from 'antd'
import { useFormContext } from 'react-hook-form'

const Slider = ({ setValue, name, max }) => {
  const { getValues } = useFormContext()

  return (
    <AntSlider
      onChange={newValue => {
        setValue(name, newValue)
      }}
      max={max}
      value={getValues(name)}
      step={name.includes('percent') ? 0.1 : Math.ceil(max / 100)}
      trackStyle={{ background: '#0468FF' }}
      handleStyle={{
        background: '#0468FF',
        border: 'none',
        boxShadow: 'none',
      }}
      style={{ margin: '-5px 0 10px' }}
    />
  )
}

export default Slider
