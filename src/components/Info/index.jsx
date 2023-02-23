import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './style.module.scss'
import InfoItem from './components/InfoItem'
import { parseData } from './utils'

const Info = () => {
  const { watch } = useFormContext()

  const {
    credits, percent, earnings, everyMonthPayment,
  } = parseData(watch())

  const infoItems = [
    { name: 'Кредит', sum: credits },
    { name: 'Проценты', sum: percent },
    { name: 'Проценты + Кредит', sum: credits + percent },
    { name: 'Необходимый доход', sum: earnings },
  ]

  return (
    <div className={styles.info}>
      <div className={styles.infoMain}>
        <h2>Ваш ежемесячный платеж: </h2>
        <span className={styles.payment}>
          {everyMonthPayment}
          {' '}
          ₽
        </span>
      </div>
      <div className={styles.details}>
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Info
