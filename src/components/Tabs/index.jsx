import React from 'react'
import { Tabs as AntTabs } from 'antd'
import './style.scss'

const { TabPane } = AntTabs

const Tabs = ({ currentTab, setTab }) => (
  <AntTabs
    tabBarStyle={{
      backgroundColor: 'rgba(21, 34, 66, 0.06)',
      padding: '20px 24px',
    }}
    tabBarGutter={20}
    defaultActiveKey={currentTab}
    type="card"
    onChange={tab => setTab(tab)}
  >
    <TabPane
      tab={<span className="tab">Недвижимость</span>}
      key="Недвижимость"
    />
    <TabPane
      tab={<span className="tab">Кредит</span>}
      key="Кредит"
    />
    <TabPane
      tab={<span className="tab">Платеж</span>}
      key="Платеж"
    />
  </AntTabs>
)

export default Tabs
