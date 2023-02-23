import { Button } from 'antd'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './style.module.scss'
import FieldCollection from './FieldCollection'

const Form = ({ currentTab, setSuccess, setFetching }) => {
  const sendData = () => {
    setFetching(true)
    new Promise(resolve => {
      setTimeout(() => {
        setSuccess(true)
        resolve()
      }, 1000)
    })
      .then(() => setFetching(false))
  }

  const { handleSubmit } = useFormContext()

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(sendData)}
    >
      <FieldCollection currentTab={currentTab} />
      <Button
        type="primary"
        className={styles.submitBtn}
        htmlType="submit"
      >
        Подать заявку онлайн
      </Button>
    </form>
  )
}

export default Form
