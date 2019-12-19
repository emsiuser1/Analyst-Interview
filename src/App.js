import React from 'react';

import GrabData from './components/GrabData'
import TitleHeader from './components/TitleHeader'
import OccDataTable from './components/OccDataTable'
import RegionalTrends from './components/RegionalTrends'
import IndustryTable from './components/IndustryTable'
import JobsTable from './components/JobsTable'

import { useDispatch, useSelector } from 'react-redux';

import { setOccData } from './actions'
import { getOccData} from './reducers'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <GrabData />
      <TitleHeader />
      <OccDataTable />
      <RegionalTrends />
      <JobsTable />
      <IndustryTable />
    </div>
  )
}

export default App;
