import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData, getJsonData } from '../reducers'

// things to do:
// put the th into a separate component and .map into the table
// fix variable name occData[0] to be more readable
// potentially re-use some styled components?
// comment code
//take equation out of div
//clean up equation
//creat more tmp vars

const Div = styled.div`
	margin-left: 2%;
	margin-top: 2%;
`
const Table = styled.table`
	padding: 10px; 
	width: 96%;
	height: auto;
	text-align: center;
	border-top: solid #819bb1 1px;
	border-bottom: solid #819bb1 1px;
	margin-bottom: 2%;
`
const Header = styled.h3`
	text-align: left;
	color: #204354;
`
const CellNumbers = styled.h2`
	color: #204354;
`

const OccDataTable = () => {

	const jsonData = useSelector(getJsonData)
	const occData = useSelector(getOccData)
	const [jobs, setJobs] = useState([])
	const [percent, setPercent] = useState(0)

	useEffect(() => {


		if (jsonData.summary && occData[0]['data']) {
			setJobs(jsonData.summary)
			setPercent(Math.round(100 - ((Number(occData[0]['data'][2]['rows'][0]) - Number(jsonData.summary.jobs.national_avg)) / Number(occData[0]['data'][2]['rows'][0]) * 100)))

		}


	}, [jsonData, occData])
	console.log(jobs)
	
  return (
    <Div>
		{ occData[0].data && jobs.jobs ? <Table>
    		<caption>
    				<Header> Occupation Summary for {occData[0]['data'][1]['rows'][0]} </Header> 		
    		</caption>
    		<tbody>
    			<tr>

    				<th>
    					<CellNumbers> {Math.round(occData[0]['data'][2]['rows'][0])} </CellNumbers>
    					<h5 style={{color: '#204354'}}> ({occData[0]['data'][2]['name']}) </h5>
    					<h5 style={{color: '#204354'}} > { percent }% <span style={{color: '#41d592'}}> above </span> National average </h5>
    				</th>

    				<th style={{borderLeft: 'solid #819bb1 1px', padding: '5px', width: '33%'}}>
    					<h1 style={{color: '#41d592'}}> +{jobs.jobs_growth.regional}% </h1>
    					<h5 style={{color: '#204354'}}> {`% Change (${jobs.jobs_growth.start_year} - ${jobs.jobs_growth.end_year})`} </h5>
    					<h5 style={{color: '#204354'}}> Nation: <span style={{color:'#41d592'}}> +{jobs.jobs_growth.national_avg}% </span> </h5>
    				</th>

    				<th style={{borderLeft: 'solid #819bb1 1px', padding: '5px', width: '33%'}}>
    				  <CellNumbers> ${Math.round(occData[0]['data'][3]['rows'][0])}/hr </CellNumbers>
    				  <span style={{color: '#204354'}}> Median Hourly Earnings </span>
    				  <h5 style={{color: '#204354'}}> Nation: ${Math.round(occData[3]['earnings'])}/hr </h5>
    				</th>

    			</tr>
    		</tbody>
    	</Table> : ''}
    </Div>
  )
}

export default OccDataTable;