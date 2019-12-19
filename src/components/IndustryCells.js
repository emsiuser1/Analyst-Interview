import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData, getJsonData } from '../reducers'

const TD = styled.td`
	text-align: left;
`

const IndustryCells = () => {

	const industries = useSelector(getJsonData)
	useEffect(() => {

	}, [])


  return (industries['employing_industries'] !== undefined ? industries['employing_industries']['industries'].map((industry, i) => (
  	<tr key={i}>
  		<TD> {industry.title} </TD>
  		<td> {industry.jobs} </td>
  	</tr>
  )) : '')
}

export default IndustryCells;