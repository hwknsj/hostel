import './index.css'

import * as React from 'react'

import Content from '../Content'
import Nav from '../Nav'
import Splash from '../Splash'
import Store from '../../Store'
import { observer } from 'mobx-react'

export interface IProps {
  store: Store
}

function App({ store }: IProps) {
  return (
    <div className='container'>
      <Nav store={store} />
      {store.selectedMonitorId ? <Content store={store} /> : <Splash />}
    </div>
  )
}

export default observer(App)
