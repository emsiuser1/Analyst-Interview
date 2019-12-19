import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData, getJsonData } from '../reducers'


// Add the ability 


const TD = styled.td`
	text-align: left;
`

const JobsCells = () => {

	const industries = useSelector(getJsonData)
	const [regional, setRegional] = useState([])

	const occData = useSelector(getJsonData)
	// console.log(occData)
	useEffect(() => {
		if (occData['trend_comparison'] !== undefined) {
			const tmp = [
				{
					regional: occData['trend_comparison']['regional']
				},
				{
					state: occData['trend_comparison']['state']
				},
				{
					nation: occData['trend_comparison']['nation']
				}
			]
			setRegional(tmp)
		}
	}, [occData])


  return (regional[0] ? regional.map((region, i) => (
  	<tr key={i}>
  		<td> {i} </td>
  	</tr>
  	
  )) : '')

}

export default JobsCells;