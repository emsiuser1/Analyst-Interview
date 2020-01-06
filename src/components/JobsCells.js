import React, { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData, getJsonData } from '../reducers'


const TD = styled.td`
	text-align: left;
`
const TR = styled.tr`
	padding: 10px;
	border-bottom: solid 2px lightgrey;
`

const JobsCells = () => {

	const industries = useSelector(getJsonData)
	const [regional, setRegional] = useState([])

	const occData = useSelector(getJsonData)
	// console.log(occData)
	useEffect(() => {
		if (occData['trend_comparison'] !== undefined) {
			const trendComps = occData['trend_comparison'] //trendComps === trend_comparison
			const tmp = 
				[
					{
						name: 'Regional',
						jobs2013: trendComps['regional'][0],
						jobs2018: trendComps['regional'][occData['trend_comparison']['regional'].length - 1]
					},
					{
						name: 'State',
						jobs2013: trendComps['state'][0],
						jobs2018: trendComps['state'][occData['trend_comparison']['state'].length - 1]
					},
					{
						name: 'Nation',
						jobs2013: trendComps['nation'][0],
						jobs2018: trendComps['nation'][occData['trend_comparison']['nation'].length - 1]
					} 
				]

			setRegional(tmp)
			// console.log(tmp)
		}
	}, [occData])

	const formatNum = (num) => {
	  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //adds commas to numbers
	}


  return (regional[1] !== undefined ? regional.map((region, i) => (
  	<TR>
  		<TD> {region['name']}     </TD>
  		<TD> {formatNum(region['jobs2013'])} </TD>
  		<TD> {formatNum(region['jobs2018'])} </TD>
  		<TD> {formatNum(region['jobs2018'] - region['jobs2013'])} </TD>
  		<TD> {Math.round(((region['jobs2018'] - region['jobs2013']) / region['jobs2013']) * 1000)/ 10}% </TD>
  	</TR>
  )) : '')
}

export default JobsCells;

