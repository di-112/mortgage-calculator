export const parseData = data => {
  const {
    price = 0,
    initialPayment = 0,
    durationCredit = 0,
    percent = 0,
  } = data

  const credits = Math.ceil(price - initialPayment + price * percent)

  const everyMonthPayment = Math.ceil(credits / (durationCredit * 12))

  const earnings = Math.ceil(everyMonthPayment * 2)

  return {
    credits,
    percent: (price / 100) * percent,
    earnings,
    everyMonthPayment,
  }
}
