import React from 'react'
import { Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import Slider from './components/Slider'
import Buttons from './components/Buttons'
import style from '../../../style.module.scss'
import { getMaxLength } from '../../../utils'

const Field = ({
  text, name, max, inputSign, buttonsValue, defaultValue, dependenceField, buttonSymbol,
}) => {
  const {
    control, setValue, formState: { errors },
  } = useFormContext()

  const propsForButtons = {
    name, buttonsValue, dependenceField, buttonSymbol, defaultValue,
  }
  const propsForSlider = {
    setValue, max, name, defaultValue,
  }

  return (
    <div className={style.inputWrapper}>
      <label htmlFor={name}>{text}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: true, pattern: /^[0-9]+$/,
        }}
        render={({ field }) => (
          <>
            <Input
              {...field}
              id={name}
              className={style.customInput}
              maxLength={getMaxLength(max)}
            />
            <p className={style.inputSymbol}>{inputSign}</p>
            <Slider {...propsForSlider} />
            <Buttons {...propsForButtons} />
          </>
        )}
      />
      <div>
        {Object.keys(errors).length ? (<span style={{ color: 'red', fontSize: 25 }}>Error</span>) : null}
      </div>
    </div>
  )
}

export default Field
