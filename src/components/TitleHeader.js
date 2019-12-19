import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOccData} from '../reducers'

const Title = styled.h3`
	color: #204354;
`
const Header = styled.h2`
	color: #204354;
`

const Div = styled.div`
	margin-left: 2%;
`

const TitleHeader = () => {

	const occData = useSelector(getOccData)
	console.log(occData)

  return (
    <Div>
    	<Header> Occupation Overview </Header>
    	<Title> {(occData[0]['data'] !== undefined ? `${occData[0]['data'][1]['rows'][0]} in ${occData[0]['data'][0]['rows'][0]}` : '' )} </Title>
    </Div>
  )
}

export default TitleHeader;