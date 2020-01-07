import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getJsonData } from '../reducers'

const TD = styled.td`
	text-align: right;
`
const TR = styled.tr`

`

const IndustryCells = () => {

	const industries = useSelector(getJsonData)
  const [empIndustries, setEmpIndustries] = useState([])
  const [totalJobs, setTotalJobs] = useState(0)
	useEffect(() => {

    if (industries['employing_industries']) {
      setEmpIndustries(industries['employing_industries'])
      setTotalJobs(industries['employing_industries']['jobs'])
    }
	}, [industries])


  return ( empIndustries['industries'] !== undefined ? empIndustries['industries'].map((industry, i) => (
  	<TR key={i} style={{backgroundSize: '37%', backgroundColor: 'lightblue'}}>
  		<TD style={{textAlign: 'left'}}> {industry.title} </TD>
  		<TD> {industry.in_occupation_jobs} </TD>
      <TD> {Math.round(industry.in_occupation_jobs / totalJobs * 1000) / 10}% </TD>
      <TD> {Math.round(industry.in_occupation_jobs / industry.jobs * 1000) / 10}% </TD>
  	</TR>
  )) : '')
}

export default IndustryCells;