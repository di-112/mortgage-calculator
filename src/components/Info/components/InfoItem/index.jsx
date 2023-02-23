import React from 'react'
import styles from './style.module.scss'

const InfoItem = ({ name, sum }) => (
  <div className={styles.detailsItem}>
    <span>
      {name}
      :
    </span>
    <strong>
      {sum}
      {' '}
      ₽
    </strong>
  </div>
)

export default InfoItem
