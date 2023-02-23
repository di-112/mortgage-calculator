export const getInputsData = currentTab => {
  const firstPaymentButtons = [0, 10, 15, 20, 25, 30]
  const yearsButtons = [0, 10, 15, 20]
  const percentBetButtons = [4.5, 6, 7.5, 9.1, 10]

  switch (currentTab) {
    case 'Недвижимость':
      return [
        {
          text: 'Стоимость недвижимости',
          name: 'price',
          max: 99999999,
          defaultValue: 50000000,
          inputSign: '₽',
        },
        {
          text: 'Первоначальный взнос',
          name: 'initialPayment',
          max: 99499999,
          defaultValue: 10000000,
          buttonsValue: firstPaymentButtons,
          dependenceField: 'price',
          buttonSymbol: '%',
          inputSign: '₽',
        },
        {
          text: 'Срок кредита',
          name: 'durationCredit',
          max: 30,
          defaultValue: 10,
          buttonsValue: yearsButtons,
          buttonSymbol: 'лет',
          inputSign: 'Лет',
        },
        {
          text: 'Процентная ставка',
          name: 'percent',
          max: 30,
          defaultValue: 4.5,
          buttonsValue: percentBetButtons,
          buttonSymbol: '%',
          inputSign: '%',
        },
      ]

    case 'Кредит':
      return [
        {
          text: 'Сумма кредита',
          name: 'price',
          max: 99999999,
          defaultValue: 10000000,
          inputSign: '₽',
        },
        {
          text: 'Срок кредита',
          name: 'durationCredit',
          max: 30,
          defaultValue: 10,
          buttonsValue: yearsButtons,
          buttonSymbol: 'лет',
          inputSign: 'Лет',
        },
        {
          text: 'Процентная ставка',
          name: 'percent',
          max: 30,
          defaultValue: 6,
          buttonsValue: percentBetButtons,
          buttonSymbol: '%',
        },
      ]

    case 'Платеж':
      return [
        {
          text: 'Ежемесячный платеж',
          name: 'price',
          max: 99999999,
          defaultValue: 20000000,
          inputSign: '₽',
        },
        {
          text: 'Первоначальный взнос',
          name: 'initialPayment',
          max: 99499999,
          defaultValue: 9950000,
          inputSign: '₽',
        },
        {
          text: 'Срок кредита',
          name: 'durationCredit',
          max: 30,
          defaultValue: 10,
          buttonsValue: yearsButtons,
          buttonSymbol: 'лет',
          inputSign: 'Лет',
        },
        {
          text: 'Процентная ставка',
          name: 'percent',
          max: 30,
          defaultValue: 4.5,
          buttonsValue: percentBetButtons,
          buttonSymbol: '%',
          inputSign: '%',
        },
      ]

    default:
      return null
  }
}

export const onlyDigits = str => str.replace(/[^\d]/g, '')

export const getMaxLength = value => Math.abs(value).toString().length

export const calculatePercent = (initialValue, percent) => Math.ceil((initialValue / 100) * percent)
