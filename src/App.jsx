import React, { useState } from 'react'
import { Layout, Row } from 'antd'
// eslint-disable-next-line import/no-extraneous-dependencies
import { CalculatorOutlined } from '@ant-design/icons'
import Calculator from './components/Calculator'
import Tabs from './components/Tabs'
import 'antd/dist/antd.css'
import './App.scss'

const { Header, Content } = Layout

const App = () => {
  const [currentTab, setTab] = useState('Недвижимость')

  return (
    <Layout className="layout">
      <Header>
        <Row
          style={{ height: '100%' }}
          align="middle"
        >
          <CalculatorOutlined style={{ fontSize: 35, color: 'white' }} />
        </Row>
      </Header>
      <Content style={{ padding: '70px 50px 20px' }}>
        <div className="site-layout-content">
          <h1>Ипотечный калькулятор</h1>
          <Tabs
            currentTab={currentTab}
            setTab={setTab}
          />
          <Calculator currentTab={currentTab} />
        </div>
      </Content>
    </Layout>
  )
}

export default App
