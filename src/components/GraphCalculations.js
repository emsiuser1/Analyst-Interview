import React, {useEffect, useState} from 'react';
// import styled from 'styled-components'
//npm install chart.js --save

//fix graph to display correct data
//turn into percentages

import { getJsonData } from '../reducers'
import { useSelector } from 'react-redux'

import RegionalTrends from './RegionalTrends'

const GraphCalculations = () => {

	const [graphData, setGraphData] = useState([])
	const jsonData = useSelector(getJsonData)

	useEffect(() => {

		const regions = ['regional', 'state', 'nation']


		if (jsonData.trend_comparison) {
			const trendComps = jsonData.trend_comparison
			// console.log(trendComps)
			const perChange = regions.map((region, i) => (trendComps[region])
				.map((jobs, i) => Math.round((trendComps[region][i + 1] - jobs) / jobs * 1000) / 10))
			setGraphData(perChange)
		}


	}, [jsonData])

  return (
    <div>
    	<RegionalTrends regionalTrends={graphData}/>
    </div>
  )
}

export default GraphCalculations;
