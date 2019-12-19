import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'
//npm install chart.js --save

//fix graph to display correct data
//turn into percentages

import { getJsonData } from '../reducers'
import { useSelector } from 'react-redux'

const RegionalTrends = () => {

	const Div = styled.div`
		margin-left: 2%;
		width: 96%;
	`
	const [regional, setRegional] = useState([])

	const occData = useSelector(getJsonData)
	console.log(occData)
	useEffect(() => {
		if (occData['trend_comparison'] !== undefined) {
			const tmp = {
				regional: occData['trend_comparison']['regional'],
				state: occData['trend_comparison']['state'],
				nation: occData['trend_comparison']['nation']
			}	
			setRegional(tmp)
		}
	}, [occData])
	


	const data = {
		labels: [2013, 2014, 2015, 2016, 2017, 2018],
		datasets: [
			{
				label: 'Regional Trends',
				fill: false,
				data: regional.regional,
				borderColor: '#204354',
				backgroundColor: '#41d592'
			},
			{
				label: 'State Trends',
				fill: false,
				data: regional.state,
				borderColor: '#41d592',
				backgroundColor: '#204354'
			},
			{
				label: 'National Trends',
				fill: false,
				data: regional.nation,
				borderColor: 'red',
				backgroundColor: '#204354'
			}

		]
	}


	const options = {
		showLines: true,
		legend: {
			labels: {
				fontColor: '#819bb1'
			}
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						color: '#819bb1',
					},
					ticks: {
						fontColor: '#819bb1'
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						color: '#819bb1'
					},
					ticks: {
						fontColor: '#819bb1'
					}
				}
			]
		}
	}

  return (
    <Div>
    	<Line data={data} options={options} width={15} height={5}/>
    </Div>
  )
}

export default RegionalTrends;
