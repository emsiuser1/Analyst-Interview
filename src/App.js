import React from 'react';

import GrabData from './components/GrabData'
import TitleHeader from './components/TitleHeader'
import OccDataTable from './components/OccDataTable'
import GraphCalculations from './components/GraphCalculations'
import IndustryTable from './components/IndustryTable'
import JobsTable from './components/JobsTable'

const App = () => {

  return (
    <div>
      <GrabData />
      <TitleHeader />
      <OccDataTable />
      <GraphCalculations />
      <JobsTable />
      <IndustryTable />
    </div>
  )
}

export default App;
