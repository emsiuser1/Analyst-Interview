import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData} from '../reducers'
import JobsCells from './JobsCells'


const Div = styled.div`
	margin-left: 2%;
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

const Header = styled.h2`
	color: #204354;
	margin-left: 2%;
`

const JobsTable = () => {

  return (
  	<Fragment>
	  	<Div>
	  		<Table>
	  			<tbody>
	  				<tr>
	  					<th> Region </th>
	  					<th> 2013 Jobs </th>
	  					<th> 2018 Jobs </th>
	  					<th> Change </th>
	  					<th> %Change </th>
	  				</tr>
	  				<JobsCells />
	  			</tbody>
	  		</Table>
	  	</Div>
  	</Fragment>
  )
}

export default JobsTable;