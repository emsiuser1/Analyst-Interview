import React, { Fragment } from 'react';
import styled from 'styled-components';

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
const TH = styled.th`
	color: #204354;
	text-align: right;
`

const IndustryTable = () => {

  return (
  	<Fragment>
	  	<Header> Industries Employing Computer Programmers </Header>
	  	<Div>
	  		<Table>
	  			<tbody>
	  				<tr>
	  					<TH style={{width: '50%', textAlign: 'left'}}> Industry </TH>
	  					<TH> Occupation Jobs in Industry (2015) </TH>
	  					<TH> % of Occupation in Industry (2015) </TH>
	  					<TH> % of Total Jobs in Industry (2015) </TH>
	  				</tr>
	  				<IndustryCells />
	  			</tbody>
	  		</Table>
	  	</Div>
  	</Fragment>
  )
}

export default IndustryTable;