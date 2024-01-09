import React from 'react'
import DynamicListContainer from './components/DynamicListContainer'
import data from './data'

const App = () => {
  return (
    <DynamicListContainer data={data} type={'ol'} orientation={'verticle'}/>
  )
}

export default App