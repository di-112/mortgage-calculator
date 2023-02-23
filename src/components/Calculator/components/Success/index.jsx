import React from 'react'
import { Result, Button } from 'antd'

const Success = ({ setSuccess }) => (
  <Result
    status="success"
    title="Заявка принята"
    subTitle="Ожидайте ответа в течении 10 минут"
    extra={[
      <Button
        onClick={() => setSuccess(false)}
        style={{ borderRadius: 10 }}
        size="large"
        type="primary"
        key="console"
      >
        Обратно
      </Button>,
    ]}
  />
)

export default Success
