import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData} from '../reducers'

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

	const occData = useSelector(getOccData)

  return (
    <Div>
		{ occData[0]['data'] !== undefined ? <Table>
    		<caption>
    				<Header> Occupation Summary for {occData[0]['data'][1]['rows'][0]} </Header> 		
    		</caption>
    		<tbody>
    			<tr>
    				<th>
    					<CellNumbers> {Math.round(occData[0]['data'][2]['rows'][0])} </CellNumbers>
    					<span style={{color: '#204354'}}> ({occData[0]['data'][2]['name']}) </span>
    				</th>
    				<th style={{borderLeft: 'solid #819bb1 1px', padding: '5px', width: '33%'}}> Hello </th>
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