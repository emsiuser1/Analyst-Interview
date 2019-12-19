import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData} from '../reducers'
import IndustryCells from './IndustryCells'

//To do:
//build a styled component for table caption?


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

const IndustryTable = () => {

  return (
  	<Fragment>
	  	<Header> Industries Employing Computer Programmers </Header>
	  	<Div>
	  		<Table>
	  			<tbody>
	  				<tr>
	  					<th> Industry </th>
	  					<th>  Occupation Jobs in Industry (2015)</th>
	  				</tr>
	  				<IndustryCells />
	  			</tbody>
	  		</Table>
	  	</Div>
  	</Fragment>
  )
}

export default IndustryTable;