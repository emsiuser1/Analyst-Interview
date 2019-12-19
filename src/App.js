import React from 'react';

import EarningsData from './components/EarningsData'
import TitleHeader from './components/TitleHeader'
import OccDataTable from './components/OccDataTable'
import RegionalTrends from './components/RegionalTrends'
import IndustryTable from './components/IndustryTable'

import { useDispatch, useSelector } from 'react-redux';

import { setOccData } from './actions'
import { getOccData} from './reducers'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <TitleHeader />
      <EarningsData />
      <OccDataTable />
      <RegionalTrends />
      <IndustryTable />
    </div>
  )
}

export default App;
